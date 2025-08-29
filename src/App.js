import useGoogleSheet from "./useGoogleSheet";
import AppContent from "./AppContent";

function App() {
  const { rows, metadata } = useGoogleSheet();

  return <AppContent rows={rows} metadata={metadata} />;
}

export default App;
