import gsap from "gsap";
import { CircleIconWrapper } from "./styled";

export const CircleIcon = () => {
  const ctx = gsap.context((c) => {
    c.add("onHover", () => {
      gsap.to(".animcircle", {
        scale: 5,
        duration: 0.1,
        ease: "bounce.in",
      });
    });
  });

  return (
    <CircleIconWrapper>
      <svg
        width="536"
        height="530"
        viewBox="0 0 536 530"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={ctx.onHover}
        onClick={() => ctx.revert()}
      >
        <circle opacity="0.2" cx="268" cy="265" r="264.5" stroke="#42567A" />
        <circle
          id="circle-0"
          className="animcircle"
          cx="533"
          cy="265"
          r="3"
          fill="#42567A"
        />
        <circle
          id="circle-1"
          className="animcircle"
          cx="138"
          cy="34"
          r="3"
          fill="#42567A"
        />
        <circle
          id="circle-2"
          className="animcircle"
          cx="402"
          cy="492"
          r="3"
          fill="#42567A"
        />
        <circle
          id="circle-3"
          className="animcircle"
          cx="126"
          cy="489"
          r="3"
          fill="#42567A"
        />
        <circle
          id="circle-4"
          className="animcircle"
          cx="3"
          cy="265"
          r="3"
          fill="#42567A"
        />
        <circle
          id="circle-5"
          className="animcircle"
          cx="381"
          cy="26"
          r="3"
          fill="#42567A"
        />
      </svg>
    </CircleIconWrapper>
  );
};
