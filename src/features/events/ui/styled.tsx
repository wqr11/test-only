import { styled } from "styled-components";

export const EventsStyled = styled.div`
  width: 100%;
  position: absolute;
  bottom: 80px;
  @media (max-width: 768px) {
    bottom: 310px;
    left: 0;
    &::before {
      content: "";
      width: calc(100% - 40px);
      height: 1px;
      position: absolute;
      top: -20px;
      left: 20px;
      background-color: #c7cdd9;
    }
  }
`;

export const EventsWrapper = styled.div`
  max-width: 100%;
  padding-inline: 80px;
  margin-top: auto;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 768px) {
    padding-inline: 20px 0;
  }
`;

export const EventsDotPagination = styled.div`
  display: none;
  gap: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: absolute;
  bottom: -80px;
  left: 0;
  @media (max-width: 768px) {
    display: flex;
  }
`;
