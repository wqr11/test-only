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
import { useRootPageContext } from "@/features/root";
import { useGSAP } from "@gsap/react";
import { CircleIcon } from "./icon";
import { useDotAnimations } from "../lib";

const RADIUS = 265;
const DOTS_NUMBER = 6;
const CONTAINER_SIZE = 530;

const TEXTS = ["", "Кино", "Литература", "", "", "Наука"] as const;

export const CircleWidget = () => {
  const { page, setPage } = useRootPageContext();
  const { shrinkAllButOne, expandOne } = useDotAnimations();

  const ref = useRef<HTMLDivElement>(null);
  const currentTimeline = useRef<gsap.core.Timeline>(null);

  const [animationInProgress, setAnimationInProgress] =
    useState<boolean>(false);

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentAngle, setCurrentAngle] = useState<number>(0);

  const handleClick = (idx: number, ignoreProgress?: boolean) => {
    if (!ignoreProgress && (animationInProgress || currentIndex === idx)) {
      return;
    }

    setAnimationInProgress(true);

    setCurrentIndex(idx);
    setPage(idx);

    const step = 360 / DOTS_NUMBER;

    let diff = idx - currentIndex;

    if (diff > DOTS_NUMBER / 2) {
      diff -= DOTS_NUMBER;
    } else if (diff < -DOTS_NUMBER / 2) {
      diff += DOTS_NUMBER;
    }

    const newAngle = currentAngle - diff * step;
    setCurrentAngle(newAngle);

    const id = `dot-${idx}`;

    shrinkAllButOne(id);
    expandOne(id);

    const ANGLE_EASING = "power2.inOut";

    const tl = currentTimeline.current;

    if (tl) {
      tl.kill();
    }

    currentTimeline.current = gsap
      .timeline()
      .to(ref.current, {
        rotateZ: `${newAngle}deg`,
        duration: 1.5,
        ease: ANGLE_EASING,
        onComplete: () => setAnimationInProgress(false),
      })
      .to(
        ".dot-wrapper",
        {
          rotateZ: `${-newAngle}deg`,
          duration: 1.5,
          ease: ANGLE_EASING,
        },
        "<"
      )
      .to(
        ".text",
        {
          display: "none",
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        },
        "<"
      )
      .to(
        `#dot-${idx} .text`,
        {
          display: "block",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        ">"
      );
  };

  const handleMouseEnter = useCallback(
    (i: number) => {
      if (i === currentIndex) return;
      const id = `dot-${i}`;
      expandOne(id);
    },
    [currentIndex]
  );

  const handleMouseLeave = useCallback(
    (i: number) => {
      if (i === currentIndex) return;
      const id = `dot-${currentIndex}`;
      shrinkAllButOne(id);
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
    handleClick(page, true);
  }, [page]);

  return (
    <CircleWidgetStyled>
      <CircleWidgetWrapper ref={ref}>
        <CircleIcon radius={RADIUS} />
        {buttonsNode}
      </CircleWidgetWrapper>
    </CircleWidgetStyled>
  );
};
