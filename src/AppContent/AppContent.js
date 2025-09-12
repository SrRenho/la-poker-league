import { useNightNavigation } from "./useNightNavigation";
import { useAutoNext } from "./useAutoNext";
import processNights from "./processNights";
import TextureOverlay from "./TextureOverlay";
import Logo from "./Logo";
import Leaderboard from "./Leaderboard/Leaderboard";
import NavigationButtons from "./NavigationButtons";

function AppContent({ rows, metadata }) {
  const nights = processNights(rows);
  const { currentNight, goNext, goPrev, hasNext, hasPrev } = useNightNavigation(nights);

  useAutoNext(goNext, hasNext);

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
      <div style={{ paddingTop: "5rem", alignSelf: "flex-start",   margin: "-1rem 29.5rem"}} >
        <Logo/>
      </div>
      <Leaderboard night={currentNight} metadata={metadata} />
      <NavigationButtons goPrev= {goPrev} goNext={goNext} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  );
}

export default AppContent;

