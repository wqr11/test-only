import { CircleWidget } from "../circle";
import { Lines } from "./lines";
import { Years } from "./years";
import { PeriodsStyled, PeriodsWrapper } from "./styled";

export const Periods = () => {
  return (
    <PeriodsStyled>
      <PeriodsWrapper>
        <CircleWidget />
        <Lines />
        <Years />
      </PeriodsWrapper>
    </PeriodsStyled>
  );
};
