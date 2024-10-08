import { SVGProps } from "react";

const LeftButton = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="22"
    height="50"
    viewBox="0 0 22 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M17.1899 9.375C17.3949 9.3725 17.598 9.41292 17.7864 9.49365C17.9748 9.57437 18.1442 9.69363 18.2837 9.84375C18.9087 10.4687 18.9087 11.4375 18.2837 12.0625L5.31494 25.0313L18.2837 37.9688C18.9087 38.5938 18.9087 39.5625 18.2837 40.1875C17.6587 40.8125 16.6899 40.8125 16.0649 40.1875L2.03369 26.0937C1.40869 25.4687 1.40869 24.5 2.03369 23.875L16.0962 9.84375C16.4087 9.53125 16.8149 9.375 17.1899 9.375Z"
      fill="#ECECE7"
    />
  </svg>
);

export default LeftButton;
