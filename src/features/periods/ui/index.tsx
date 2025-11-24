import { PeriodsSelector } from "./selector";
import { PeriodsStyled } from "./styled";
import { Years } from "./years";

export const Periods = () => {
  return (
    <PeriodsStyled>
      <PeriodsSelector />
      <Years />
    </PeriodsStyled>
  );
};
