import { styled } from "styled-components";

export const PaginatorStyled = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  bottom: 272px;
  left: 80px;
  z-index: 4;
  @media (max-width: 768px) {
    bottom: 180px;
    left: 20px;
  }
`;

export const PaginatorPageNumber = styled.span`
  font-family: "PT Sans Regular";
  font-size: 14px;
  color: ${({ theme }) => theme.gray};
`;

export const PaginatorButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media (max-width: 768px) {
    gap: 8px;
  }
`;
