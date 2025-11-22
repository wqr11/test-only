import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@/router";
import { ThemeProvider } from "@/shared/theme";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "@/shared/styles/index.css";

gsap.registerPlugin(useGSAP);

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>
);
