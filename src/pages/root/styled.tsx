import { styled } from "styled-components";

export const RootPageStyled = styled.div`
  width: 75vw;
  height: 100vh;
  margin-left: 15vw;
  overflow: hidden;
  position: relative;
  border-inline: 1px solid ${({ theme }) => theme.blackBlue}19;
`;

export const RootPageHeader = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  align-items: center;
  padding-left: 78px;
  position: relative;
  margin-top: 177px;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.blue},
      ${({ theme }) => theme.fuschia}
    );
    z-index: 0;
  }
`;

export const RootPageTitle = styled.h1`
  max-width: 352px;
  font-family: "PT Sans Bold";
  font-size: 56px;
  line-height: 120%;
  color: ${({ theme }) => theme.blackBlue};
`;
