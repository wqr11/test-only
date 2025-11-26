import { styled } from "styled-components";

export const YearsStyled = styled.div`
  display: flex;
  width: 100%;
  gap: 80px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: calc(50% - 24px);
  left: 0;
  z-index: 2;
  transform: translateY(-50%);
  @media (max-width: 768px) {
    top: 32%;
    gap: 36px;
    span {
      font-size: 18vw;
    }
  }
`;

export interface YearStyledProps {
  $variant?: "iris" | "fuschia";
}

export const YearStyled = styled.span<YearStyledProps>`
  font-family: "PT Sans Bold";
  font-size: 10vw;
  color: ${({ $variant = "iris", theme }) =>
    $variant === "iris" ? theme.iris : theme.fuschia};
`;
