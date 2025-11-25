import { css, styled } from 'styled-components';

export interface ArrowButtonStyledProps {
  className?: string;
  $reversed?: boolean;
  $transparent?: boolean;
  $disabled?: boolean; // Has meaning only with $transparent = true
  $hidden?: boolean;
}

export const ArrowButtonStyled = styled.button<ArrowButtonStyledProps>`
  all: unset;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  rotate: ${({ $reversed }) => ($reversed ? '180deg' : '0deg')};
  cursor: pointer;
  visibility: ${({ $hidden }) => ($hidden ? 'hidden' : 'visible')};
  transition: all 150ms ease-in-out;
  &:hover {
    background-color: white;
  }
  ${({ $transparent = true, $disabled, theme }) =>
    $transparent
      ? css`
          border: 1px solid ${({ theme }) => theme.gray}80;
          opacity: ${$disabled ? '0.5' : '1'};
          svg path {
            stroke: ${theme.gray};
          }
        `
      : css`
          background-color: white;
          filter: drop-shadow(0 0 15px ${theme.blue}19);
          svg path {
            stroke: ${theme.blue};
          }
        `}
`;
