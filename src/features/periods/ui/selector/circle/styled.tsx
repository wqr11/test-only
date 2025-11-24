import { styled } from "styled-components";

export const CircleWidgetStyled = styled.div`
  width: fit-content;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) translate3d(0, 0, 0) scale(1.01);
`;

export const CircleWidgetWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  will-change: transform;
`;

export interface CircleButtonProps {
  $top: number;
  $left: number;
}

export const CircleAbsolute = styled.button.attrs<CircleButtonProps>({
  className: "dot-wrapper",
})`
  all: unset;
  position: absolute;
  top: ${({ $top }) => $top}%;
  left: ${({ $left }) => $left}%;
  transform: translateX(-50%) translateY(-50%) translate3d(0, 0, 0);
  z-index: 3;
  cursor: pointer;
  will-change: transform;
`;

export const CircleRelative = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  position: relative;
  z-index: 2;
`;

export const CircleRelativeDot = styled.div.attrs({
  className: "dot",
})`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.blackBlue};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) translate3d(0, 0, 0);
`;

export const CircleRelativeNum = styled.span.attrs({
  className: "num",
})`
  width: fit-content;
  height: fit-content;
  font-family: "PT Sans Regular";
  font-size: 20px;
  line-height: 150%;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) translate3d(0, 0, 0);
  color: ${({ theme }) => theme.blackBlue};
`;

export const CircleRelativeText = styled.span.attrs({
  className: "text",
})`
  display: none;
  width: fit-content;
  height: fit-content;
  font-family: "PT Sans Bold";
  font-size: 20px;
  line-height: 150%;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: calc(100% + 20px);
  transform: translateY(-50%) translate3d(0, 0, 0);
  color: ${({ theme }) => theme.blackBlue};
`;
