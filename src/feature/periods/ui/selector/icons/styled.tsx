import { styled } from "styled-components";

export const CircleIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  svg circle:not(:first-child):hover {
    cursor: pointer;
  }
`;
