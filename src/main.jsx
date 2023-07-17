import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider} from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <AppProvider>
      <App />
    </AppProvider>

);
