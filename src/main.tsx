import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@/router";
import "@/shared/styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <Router />
  </StrictMode>
);
