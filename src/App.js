import useGoogleSheet from "./useGoogleSheet";
import AppContent from "./AppContent";

function App() {
  const { rows, metadata } = useGoogleSheet();

  if (!rows || rows.length < 3) {
    return <div>Loading...</div>;
  }

  return <AppContent rows={rows} metadata={metadata} />;
}

export default App;