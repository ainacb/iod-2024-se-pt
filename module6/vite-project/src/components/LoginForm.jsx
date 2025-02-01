import { useState } from "react";

function LoginForm() {
  const [submitResult, setSubmitResult] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 5;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    // add some password validation
    if (attempts >= maxAttempts) return;

    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
    } else if (!/\d/.test(userPassword)) {
      setSubmitResult("Password must contain at least one number.");
    } else {
      setSubmitResult("Successful login.");
    }

    setAttempts((prevAttempts) => prevAttempts + 1);
  };

  // input state values always need to be strings - empty initially

  return (
    <div className="LoginForm componentBox">
      {attempts >= maxAttempts || submitResult === "Successful login." ? (
        <p>
          {submitResult === "Successful login."
            ? "You have successfully logged in!"
            : "Too many failed attempts. Try again later."}
        </p>
      ) : (
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
          <p>Attempts left: {maxAttempts - attempts}</p>
        </form>
      )}
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
