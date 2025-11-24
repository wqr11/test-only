import { styled } from "styled-components";

export const EventCardStyled = styled.div`
  width: 320px;
  max-height: 140px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const EventCardTitle = styled.span`
  font-family: "Bebas Neue";
  font-size: 25px;
  line-height: 120%;
  color: ${({ theme }) => theme.blue};
`;

export const EventCardText = styled.span`
  font-family: "PT Sans Regular";
  font-size: 20px;
  line-height: 150%;
  color: ${({ theme }) => theme.blackBlue};
`;
