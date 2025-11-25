export interface CircleIconProps {
  radius: number;
}

export const CircleIcon = ({ radius }: CircleIconProps) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 530 530"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      id="bigc"
      opacity="0.4"
      cx="265"
      cy="265"
      r={radius}
      stroke="#42567A80"
    />
  </svg>
);
