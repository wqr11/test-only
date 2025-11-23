import gsap from "gsap";
import { CircleButton, CircleIconWrapper } from "./styled";
import { useRef } from "react";

const RADIUS = 265;
const DOTS_NUMBER = 6;
const CONTAINER_SIZE = 530;

export const CircleIcon = () => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.target, {
      width: 50,
      height: 50,
      duration: 0.2,
      border: "1px solid #303E5880",
      backgroundColor: "#F4F5F9",
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.target, {
      width: 6,
      height: 6,
      duration: 0.2,
      border: "none",
      backgroundColor: "transparent",
      ease: "power2.out",
    });
  };

  return (
    <CircleIconWrapper ref={ref}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 530 530"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          id="bigc"
          opacity="0.2"
          cx="265"
          cy="265"
          r={RADIUS}
          stroke="#42567A"
        />
      </svg>
      {Array.from({ length: DOTS_NUMBER }).map((_, i) => {
        const angle = (2 * Math.PI * i) / DOTS_NUMBER - Math.PI / 2;
        const leftPercent =
          ((RADIUS + RADIUS * Math.cos(angle)) / CONTAINER_SIZE) * 100;
        const topPercent =
          ((RADIUS + RADIUS * Math.sin(angle)) / CONTAINER_SIZE) * 100;

        return (
          <CircleButton
            key={`dot-${i}`}
            id={`dot-${i}`}
            $top={topPercent}
            $left={leftPercent}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </CircleIconWrapper>
  );
};
