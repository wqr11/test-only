import { styled } from "styled-components";

export const LinesStyled = styled.div`
  width: 100%;
  height: 100%;
  z-index: 1;
  transform: translateY(-24px);
  @media (max-width: 768px) {
    display: none;
  }
`;
