import { SVGProps } from "react";

export const Lines = (props: SVGProps<SVGSVGElement>) => {
  return (
    <div style={{ width: "100%", height: "100%", zIndex: 1 }}>
      <svg width="100%" height="100%" viewBox="0 0 1024 1024" {...props}>
        <line
          x1="50%"
          y1="-50%"
          x2="50%"
          y2="150%"
          stroke="#42567A1A"
          strokeWidth="1"
        />
        <line
          x1="-50%"
          y1="50%"
          x2="150%"
          y2="50%"
          stroke="#42567A19"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};
