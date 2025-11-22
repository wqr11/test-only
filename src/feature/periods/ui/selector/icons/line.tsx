import { SVGProps } from "react";

export const LinesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg width="100%" height="100%" viewBox="0 0 1024 1024" {...props}>
      <line
        x1="50%"
        y1="0"
        x2="50%"
        y2="100%"
        stroke="#e3e6ed"
        strokeWidth="1"
      />
      <line
        x1="-50%"
        y1="50%"
        x2="150%"
        y2="50%"
        stroke="#e3e6ed"
        strokeWidth="1"
      />
    </svg>
  );
};
