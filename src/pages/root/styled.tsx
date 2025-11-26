import { styled } from "styled-components";

export const RootPageStyled = styled.div`
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;
  overflow-y: auto;
`;

export const RootPageContent = styled.div`
  width: 75vw;
  min-height: 872px;
  height: 100vh;
  margin-left: 15vw;
  position: relative;
  border-inline: 1px solid ${({ theme }) => theme.blackBlue}19;
  overflow: hidden;
  @media (max-width: 1280px) {
    width: 100vw;
    margin: 0;
  }
`;

export const RootPageHeading = styled.div`
  width: min-content;
  height: min-content;
  display: flex;
  align-items: center;
  padding-left: 80px;
  position: relative;
  margin-top: 10vh;
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    width: 5px;
    height: 120px;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.blue},
      ${({ theme }) => theme.fuschia}
    );
    transform: translateY(-50%);
    z-index: 0;
  }
  @media (max-width: 1280px) {
    &::before {
      display: none;
    }
    h1 {
      font-size: 46px;
    }
  }
  @media (max-width: 768px) {
    padding-left: 20px;
    margin-top: 60px;
    h1 {
      font-size: 36px;
    }
  }
`;

export const RootPageTitle = styled.h1`
  max-width: 352px;
  font-family: "PT Sans Bold";
  font-size: 56px;
  line-height: 120%;
  font-weight: 500;
  color: ${({ theme }) => theme.blackBlue};
`;
