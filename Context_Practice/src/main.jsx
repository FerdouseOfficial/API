import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { CounterProvide } from "./Context/Counter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CounterProvide>
      <App />
    </CounterProvide>
  </StrictMode>,
);
