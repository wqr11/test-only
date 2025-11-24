import { SVGProps } from "react";

export const ArrowLeftIcon = ({
  width = "9",
  height = "14",
  stroke = "#42567A",
  strokeWidth = 2,
}: SVGProps<SVGElement>) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 9 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.66418 0.707108L1.41419 6.95711L7.66418 13.2071"
      stroke={stroke}
      strokeWidth={strokeWidth}
    />
  </svg>
);
