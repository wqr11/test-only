import gsap from "gsap";
import {
  CircleAbsolute,
  CircleWidgetStyled,
  CircleWidgetWrapper,
  CircleRelative,
  CircleRelativeDot,
  CircleRelativeNum,
  CircleRelativeText,
} from "./styled";
import { useCallback, useMemo, useRef, useState } from "react";
import { useTheme } from "styled-components";
import { useRootPageContext } from "@/features/root";
import { useGSAP } from "@gsap/react";
import { CircleIcon } from "./icon";

const RADIUS = 265;
const DOTS_NUMBER = 6;
const CONTAINER_SIZE = 530;

const TEXTS = ["", "Кино", "Литература", "", "", "Наука"] as const;

export const CircleWidget = () => {
  const theme = useTheme();

  const [animationInProgress, setAnimationInProgress] =
    useState<boolean>(false);

  const { setPage } = useRootPageContext();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentAngle, setCurrentAngle] = useState<number>(0);

  const ref = useRef<HTMLDivElement>(null);

  const handleClick = (idx: number) => {
    if (animationInProgress || currentIndex === idx) {
      return;
    }

    setAnimationInProgress(true);

    const step = 360 / DOTS_NUMBER;

    let diff = idx - currentIndex;

    if (diff > DOTS_NUMBER / 2) {
      diff -= DOTS_NUMBER;
    } else if (diff < -DOTS_NUMBER / 2) {
      diff += DOTS_NUMBER;
    }

    const newAngle = currentAngle - diff * step;

    setCurrentIndex(idx);
    setCurrentAngle(newAngle);

    setPage(idx);

    const id = `dot-${idx}`;
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

    const ANGLE_EASING = "power2.inOut";
    gsap.to(ref.current, {
      rotateZ: `${newAngle}deg`,
      duration: 1.5,
      ease: ANGLE_EASING,
      onComplete: () => setAnimationInProgress(false),
    });
    gsap.to(".dot-wrapper", {
      rotateZ: `${-newAngle}deg`,
      duration: 1.5,
      ease: ANGLE_EASING,
    });
    gsap.to(".text", {
      display: "none",
      opacity: 0,
      duration: 0.4,
      ease: "power2.out",
    });
    gsap.to(`#dot-${idx} .text`, {
      display: "block",
      opacity: 1,
      duration: 0.4,
      delay: 1.5,
      ease: "power2.out",
    });
  };

  const handleMouseEnter = useCallback(
    (i: number) => {
      if (i === currentIndex) return;
      const id = `dot-${i}`;
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
    [currentIndex]
  );

  const handleMouseLeave = useCallback(
    (i: number) => {
      if (i === currentIndex) return;
      const id = `dot-${i}`;
      gsap.to(`#${id} .dot`, {
        width: 6,
        height: 6,
        border: "none",
        backgroundColor: theme.blackBlue,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(`#${id} .num`, {
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    },
    [currentIndex]
  );

  const buttonsNode = useMemo(
    () =>
      Array.from({ length: DOTS_NUMBER }).map((_, i) => {
        const angle = (2 * Math.PI * i) / DOTS_NUMBER - Math.PI / 3;
        const leftPercent =
          ((RADIUS + RADIUS * Math.cos(angle)) / CONTAINER_SIZE) * 100;
        const topPercent =
          ((RADIUS + RADIUS * Math.sin(angle)) / CONTAINER_SIZE) * 100;
        const id = `dot-${i}`;
        return (
          <CircleAbsolute
            key={id}
            id={id}
            $top={topPercent}
            $left={leftPercent}
            onClick={() => handleClick(i)}
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <CircleRelative>
              <CircleRelativeDot />
              <CircleRelativeNum>{i + 1}</CircleRelativeNum>
              <CircleRelativeText>{TEXTS[i]}</CircleRelativeText>
            </CircleRelative>
          </CircleAbsolute>
        );
      }),
    [animationInProgress]
  );

  useGSAP(() => {
    const id = "dot-0";
    gsap.to(`#${id} .dot`, {
      width: 56,
      height: 56,
      border: `1px solid ${theme.blackBlue}80`,
      backgroundColor: "#F4F5F9",
      duration: 0,
    });
    gsap.to(`#${id} .num`, {
      opacity: 1,
      duration: 0,
    });
  }, []);

  return (
    <CircleWidgetStyled>
      <CircleWidgetWrapper ref={ref}>
        <CircleIcon radius={RADIUS} />
        {buttonsNode}
      </CircleWidgetWrapper>
    </CircleWidgetStyled>
  );
};
