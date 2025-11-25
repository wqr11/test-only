import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Router } from "@/router";
import { ThemeProvider } from "@/shared/theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import "@/shared/styles/index.css";

gsap.registerPlugin(useGSAP);
gsap.registerEffect({
  name: "counter",
  extendTimeline: true,
  defaults: {
    end: 0,
    delta: 1,
    duration: 3,
    ease: "power3.out",
  },
  effect: (targets: HTMLElement[], config: Record<string, any>) => {
    const delta = config.delta;
    const tl = gsap.timeline().to(
      targets,
      {
        duration: config.duration,
        innerText: config.end,
        modifiers: {
          innerText: function (innerText) {
            const num = Number.parseInt(innerText);
            return gsap.utils
              .snap([num - delta - 1, num + delta - 1], num)
              .toString();
          },
        },
        ease: config.ease,
      },
      0
    );

    return tl;
  },
});
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </StrictMode>
);
