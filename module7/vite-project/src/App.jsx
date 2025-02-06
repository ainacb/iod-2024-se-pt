import "./App.css";
import ClockDisplay from "./components/ClockDisplay";
import { ActivityFinder } from "./components/ActivityFinder";
import { BitcoinRates } from "./components/BitcoinRates";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ActivityFinder />

      <BitcoinRates />
      {/* <ClockDisplay /> */}
    </>
  );
}

export default App;
