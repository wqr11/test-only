import gsap from "gsap";
import { useCallback } from "react";
import { useTheme } from "styled-components";

export const useDotAnimations = () => {
  const theme = useTheme();

  const shrinkAllButOne = useCallback(
    (id: string) => {
      gsap.to(`.dot-wrapper:not(#${id}) .dot`, {
        width: 6,
        height: 6,
        border: "none",
        backgroundColor: theme.blackBlue,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(`.dot-wrapper:not(#${id})  .num`, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    },
    [theme]
  );

  const expandOne = useCallback(
    (id: string) => {
      gsap.to(`#${id} .dot`, {
        width: 56,
        height: 56,
        border: `1px solid ${theme.blackBlue}80`,
        backgroundColor: "#F4F5F9",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(`#${id} .num`, {
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    },
    [theme]
  );

  return { shrinkAllButOne, expandOne };
};
