import { styled } from "styled-components";

export const YearsStyled = styled.div`
  display: flex;
  width: 100%;
  gap: 80px;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 2;
  transform: translateY(-50%);
`;

export interface YearStyledProps {
  className: string;
  $variant?: "iris" | "fuschia";
}

export const YearStyled = styled.span<YearStyledProps>`
  font-family: "PT Sans Bold";
  font-size: 200px;
  line-height: 160px;
  color: ${({ $variant = "iris", theme }) =>
    $variant === "iris" ? theme.iris : theme.fuschia};
`;
