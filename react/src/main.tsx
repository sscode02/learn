import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContextTest } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextTest></ContextTest>
    {/* <App /> */}
  </React.StrictMode>,
);
