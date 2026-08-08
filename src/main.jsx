import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClubsProvider } from "./context/ClubsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClubsProvider>
      <App />
    </ClubsProvider>
  </StrictMode>
);