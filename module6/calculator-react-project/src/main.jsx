import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import { ErrorBoundary } from "react-error-boundary";

createRoot(document.getElementById("root")).render(
  <ErrorBoundary FallbackComponent={ErrorMessage}>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>
);
