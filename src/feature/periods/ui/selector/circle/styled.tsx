import { styled } from "styled-components";

export const CircleIconWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
`;

export interface CircleButtonProps {
  $top: number;
  $left: number;
}

export const CircleButtonDot = styled.div`
  all: unset;
  display: block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.blackBlue};
`;

export const CircleButton = styled.div.attrs<CircleButtonProps>(() => ({
  children: <CircleButtonDot />,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 50%;
  position: absolute;
  transform: translateX(-50%) translateY(-50%);
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
  z-index: 2;
  cursor: pointer;
`;
