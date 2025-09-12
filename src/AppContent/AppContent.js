import Leaderboard from "./Leaderboard/Leaderboard";
import { useNightNavigation } from "./useNightNavigation";
import TextureOverlay from "./TextureOverlay";
import { useEffect, useRef } from "react";
import Logo from "./Logo";
import NavigationButtons from "./NavigationButtons";

function AppContent({ rows, metadata }) {
  const nights = processNights(rows);
  const { currentNight, goNext, goPrev, hasNext, hasPrev } = useNightNavigation(nights);

  // keep latest goNext in a ref to avoid deps lint warnings
  const goNextRef = useRef(goNext);
  useEffect(() => { goNextRef.current = goNext; }, [goNext]);

  useEffect(() => {
    if (!hasNext) return; // only trigger if there's a next at initial load
    const id = setTimeout(() => {
      // call the latest goNext
      goNextRef.current();
    }, 2000);

    return () => clearTimeout(id);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "var(--black)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TextureOverlay/>
      <div style={{ paddingTop: "5rem", alignSelf: "flex-start",   margin: "-1rem 30rem"}} >
        <Logo/>
      </div>
      <Leaderboard night={currentNight} metadata={metadata} />
      <NavigationButtons goPrev= {goPrev} goNext={goNext} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  );
}

export default AppContent;


export function processNights(rawNights) {
  let nights = enumerate(rawNights);
  nights = withRecords(nights);
  nights = withGlobals(nights);
  nights = withGames(nights);
  nights = withRankings(nights);
  nights = withRankMovement(nights);
  nights = withHistory(nights);
  nights = withAbsentStreak(nights);

  return nights;
}

function enumerate(nights) {
  return nights.map((night, i) => ({ ...night, number: i + 1 }));
}

function withRecords(nights) {
  return nights.map(night => {
    const records = Object.entries(night)
      .filter(([key]) => key !== "FECHA" && key !== "number")
      .map(([player, value]) => {
        let amount;

        if (value === "" || value === null || value === undefined) {
          amount = ""; // absent
        } else {
          amount = parseFloat(value.toString().replace(/[$,]/g, "")) || 0;
        }

        return { player, amount };
      });

    return { FECHA: night.FECHA, number: night.number, records };
  });
}



function withGlobals(nights) {
  const totals = {};

  return nights.map(night => {
    const newRecords = night.records.map(r => {
      totals[r.player] = (totals[r.player] || 0 ) + (r.amount || 0);
      return { ...r, global: totals[r.player] };
    });

    return { ...night, records: newRecords };
  });
}

function withGames(nights) {
  const counts = {};

  return nights.map(night => {
    const newRecords = night.records.map(r => {
      const played = r.amount !== "" && r.amount !== null; // played if not empty
      counts[r.player] = (counts[r.player] || 0) + (played ? 1 : 0);

      return { ...r, games: counts[r.player] };
    });

    return { ...night, records: newRecords };
  });
}

function withRankings(nights) {
  return nights.map(night => {
    // copy records and sort by global descending
    const sorted = [...night.records].sort((a, b) => b.global - a.global);

    // assign rank
    const rankedRecords = sorted.map((r, i) => ({ ...r, rank: i + 1 }));

    return { ...night, records: rankedRecords };
  });
}

function withRankMovement(nights) {
  let prevRanks = {}; // stores last night rank per player

  return nights.map(night => {
    const newRecords = night.records.map(r => {
      const movement = prevRanks[r.player] !== undefined ? prevRanks[r.player] - r.rank : 0;
      prevRanks[r.player] = r.rank; // update for next night
      return { ...r, rankMovement: movement };
    });

    return { ...night, records: newRecords };
  });
}

function withHistory(nights) {
  return nights.map((night, i) => {
    const newRecords = night.records.map(r => {
      const history = [];
      let count = 0;
      let j = i - 1;

      while (j >= 0 && count < 3) {
        const prevNight = nights[j];
        const prevRecord = prevNight.records.find(pr => pr.player === r.player);
        if (prevRecord && prevRecord.amount !== "") {
          if (prevRecord.amount > 0) history.push("+");
          else if (prevRecord.amount === 0) history.push("=");
          else if (prevRecord.amount < 0) history.push("-");
          count++;
        }
        j--;
      }

      return { ...r, history };
    });

    return { ...night, records: newRecords };
  });
}

function withAbsentStreak(nights) {
  const streaks = {}; // keeps current absence streak per player

  return nights.map(night => {
    const newRecords = night.records.map(r => {
      if (r.amount === "") {
        // player is absent → increment streak
        streaks[r.player] = (streaks[r.player] || 0) + 1;
      } else {
        // player played → reset streak
        streaks[r.player] = 0;
      }

      return { ...r, absentStreak: streaks[r.player] };
    });

    return { ...night, records: newRecords };
  });
}
