import { CircleWidget } from "./circle";
import { Lines } from "./lines";
import { PeriodsSelectorStyled } from "./styled";

export const PeriodsSelector = () => {
  return (
    <PeriodsSelectorStyled>
      <CircleWidget />
      <Lines />
    </PeriodsSelectorStyled>
  );
};
