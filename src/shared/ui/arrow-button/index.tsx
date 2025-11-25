import { ArrowLeftIcon } from './icon';
import { ArrowButtonStyledProps, ArrowButtonStyled } from './styled';

export interface ArrowButtonProps extends ArrowButtonStyledProps {
  onClick?: () => unknown;
}

export const ArrowButton = ({
  onClick,
  $disabled,
  ...props
}: ArrowButtonProps) => (
  <ArrowButtonStyled
    $disabled={$disabled}
    onClick={!$disabled ? onClick : undefined}
    {...props}
  >
    <ArrowLeftIcon />
  </ArrowButtonStyled>
);
