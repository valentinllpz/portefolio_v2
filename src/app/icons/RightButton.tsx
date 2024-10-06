import { SVGProps } from "react";

const RightButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="50"
    viewBox="0 0 22 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.68994 40.625C4.48502 40.6275 4.28184 40.5871 4.09347 40.5064C3.9051 40.4256 3.73571 40.3064 3.59619 40.1563C2.97119 39.5313 2.97119 38.5625 3.59619 37.9375L16.5649 24.9687L3.59619 12.0312C2.97119 11.4062 2.97119 10.4375 3.59619 9.8125C4.22119 9.1875 5.18994 9.1875 5.81494 9.8125L19.8462 23.9062C20.4712 24.5312 20.4712 25.5 19.8462 26.125L5.78369 40.1563C5.47119 40.4688 5.06494 40.625 4.68994 40.625Z"
      fill="#ECECE7"
    />
  </svg>
);

export default RightButton;
