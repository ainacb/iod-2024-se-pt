import { useNavigate, Outlet } from "react-router-dom";

export default function Login() {
  // built-in hook in React Router DOM, returns a function
  const navigate = useNavigate();

  const Login = () => (
    <div className="login-container">
      <h2 className="login-title">Login Page</h2>
      <input type="text" placeholder="Username" className="login-input" />
      <input type="password" placeholder="Password" className="login-input" />
      <button className="login-button">Login</button>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );

  return (
    <div className="Login componentBox">
      <h1>Login</h1>
      <Outlet /> {/* see next slide */}
      {/* Will render either <DashboardMessages> when the URL is
            "/dash/messages", <DashboardTasks> at "/dash/tasks",
            or null if it is "/dash" */}
      <button onClick={() => navigate("/dash/messages")}>Show Messages</button>
    </div>
  );
}
// ++ Move the <Outlet/> below the buttons and observe the change
// Save as DashboardPage.jsx in a new folder called 'pages'
// See next slide for additional content for this file
