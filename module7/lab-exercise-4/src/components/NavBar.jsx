import { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  //   const { theme } = useContext(MyThemeContext);
  return (
    <nav
      className="NavBar"
      //   style={{ backgroundColor: theme.background, color: theme.foreground }}
    >
      <h1>Crypto App</h1>
      <ul className="menu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/dash">Login</NavLink>
        </li>
        <li>
          <NavLink to="/about">Bitcoin Rates</NavLink>
        </li>
      </ul>{" "}
      {/* ++ Add another page with route and component */}
    </nav>
  );
}
// Save as components/NavBar.jsx and render in App.jsx
// ABOVE <AppRoutes />
