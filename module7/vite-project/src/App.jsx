import "./App.css";
import ClockDisplay from "./components/ClockDisplay";
import { ActivityFinder } from "./components/ActivityFinder";
import { BitcoinRates } from "./components/BitcoinRates";
import Charts from "./components/Charts";

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <ActivityFinder />

      <BitcoinRates />
      {/* <ClockDisplay /> */}

      <Charts />
    </>
  );
}

export default App;
