import { styled } from "styled-components";

export const DotButton = styled.button<{ $active?: boolean }>`
  all: unset;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ $active, theme }) =>
    theme.blackBlue + ($active ? "" : "64")};
  transition: all 100ms ease-in-out;
  cursor: pointer;
`;
