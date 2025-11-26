import { CircleWidget } from "../circle";
import { Lines } from "./lines";
import { Years } from "./years";
import { PeriodsStyled, PeriodsWrapper } from "./styled";

export const Periods = () => {
  return (
    <PeriodsStyled>
      <PeriodsWrapper>
        <CircleWidget />
        <Years />
        <Lines />
      </PeriodsWrapper>
    </PeriodsStyled>
  );
};
