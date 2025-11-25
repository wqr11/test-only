import { styled } from 'styled-components';

export const PaginatorStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const PaginatorPageNumber = styled.span`
  font-family: 'PT Sans Regular';
  font-size: 14px;
  color: ${({ theme }) => theme.gray};
`;

export const PaginatorButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
