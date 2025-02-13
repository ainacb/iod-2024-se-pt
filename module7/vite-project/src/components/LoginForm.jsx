import { useState, useContext } from "react";
import { useUserContext } from "../context/UserContext";
import { MyThemeContext, themes } from "../context/ThemeContext";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  // destructure the context values passed via UserProvider
  const { currentUser, handleUpdateUser } = useUserContext();

  // destructure them context
  const { theme, darkMode, setTheme } = useContext(MyThemeContext);

  const toggleTheme = () => {
    setTheme(darkMode ? themes.light : themes.dark);
  };

  // alternative using the useContext hook directly, either works
  //const {currentUser, handleUpdateUser} = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 chars long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else {
      setSubmitResult("Successful login.");
      handleUpdateUser({ email: userEmail }); // context function
    }
  };
  {
    /* if the user is already logged in, show msg instead of form */
  }
  if (currentUser.email)
    return (
      <>
        <p>Welcome {currentUser.email}!</p>
        <button onClick={() => handleUpdateUser({})}>Log Out</button>
      </>
    );

  // otherwise render same form as previously, no changes
  return (
    // <div className="LoginForm componentBox">
    <div
      className="LoginForm componentBox"
      style={{ background: theme.background, color: theme.foreground }}
    >
      <button onClick={toggleTheme}>Change Theme</button>
      {/* {passwordAttempts === 3 ? null : (
        <> */}
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange.
onChange handler uses event param e to access target value.
Whenever user types, new value is stored in state. */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        <button>Log In</button>
        <p>{submitResult}</p>
      </form>
      {/* </>
      )} */}
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
