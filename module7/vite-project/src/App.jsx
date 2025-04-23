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
import { Emoji } from "./components/Emoji";
import { EmojiProvider } from "./context/EmojiContext";
import AppRoutes from "./routes/AppRoutes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <UserProvider>
        <MyThemeProvider>
          <EmojiProvider>
            {/* <h1>Vite + React</h1> */}
            <NavBar />
            <AppRoutes />
            <Emoji />
            {/* <BitcoinRates /> */}
            {/* <LoginForm /> */}
            {/* <PostListReducer /> */}
            {/* <ReducerCounter /> */}
            {/* <VideoPlayer /> */}
            {/* <RefCounter /> */}
            {/* <ActivityFinder /> */}
            {/* <ClockDisplay /> */}
            {/* <Charts /> */}
          </EmojiProvider>
        </MyThemeProvider>
      </UserProvider>
    </>
  );
}

export default App;
