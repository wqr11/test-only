import { YearStyled, YearsStyled } from "./styled";

export const Years = () => {
  return (
    <YearsStyled>
      <YearStyled>2015</YearStyled>
      <YearStyled $variant="fuschia">2022</YearStyled>
    </YearsStyled>
  );
};
