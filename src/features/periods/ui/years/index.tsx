import { useRootPageContext } from "@/features/root";
import { YearStyled, YearsStyled } from "./styled";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

const YEARS = [
  [1961, 1983],
  [1987, 1991],
  [1992, 1997],
  [1999, 2004],
  [2008, 2012],
  [2015, 2022],
] as const;

export const Years = () => {
  const { page } = useRootPageContext();

  const ref1 = useRef<HTMLDivElement>(null);
  const ref2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const [y1, y2] = YEARS[page];

    gsap.effects.counter(ref1.current, {
      end: y1,
    });
    gsap.effects.counter(ref2.current, {
      end: y2,
    });
  }, [page]);

  return (
    <YearsStyled>
      <YearStyled ref={ref1}>1961</YearStyled>
      <YearStyled ref={ref2} $variant="fuschia">
        1983
      </YearStyled>
    </YearsStyled>
  );
};
