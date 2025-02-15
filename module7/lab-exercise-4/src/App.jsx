import "./App.css";
import { BitcoinRates } from "./components/BitcoinRates";
import NavBar from "./components/NavBar";
import MyThemeProvider from "./context/ThemeContext";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <>
      <MyThemeProvider>
        <NavBar />
        <AppRoutes />
        <BitcoinRates />
      </MyThemeProvider>
    </>
  );
}

export default App;
