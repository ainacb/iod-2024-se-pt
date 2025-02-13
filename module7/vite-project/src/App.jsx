import "./App.css";
import ClockDisplay from "./components/ClockDisplay";
import { ActivityFinder } from "./components/ActivityFinder";
import { BitcoinRates } from "./components/BitcoinRates";
import Charts from "./components/Charts";
import RefCounter from "./components/RefCounter";
import VideoPlayer from "./components/VideoPlayer";
import ReducerCounter from "./components/ReducerCounter";
import PostListReducer from "./components/PostListReducer";
import { UserProvider } from "./context/UserContext";
import LoginForm from "./components/LoginForm";
import MyThemeProvider from "./context/ThemeContext";
import Emoji from "./components/Emoji";

function App() {
  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <h1>Vite + React</h1>

          <Emoji />

          {/* <LoginForm /> */}

          {/* <PostListReducer /> */}

          {/* <ReducerCounter /> */}

          {/* <VideoPlayer /> */}

          {/* <RefCounter /> */}

          {/* <ActivityFinder /> */}

          {/* <BitcoinRates /> */}
          {/* <ClockDisplay /> */}

          {/* <Charts /> */}
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
