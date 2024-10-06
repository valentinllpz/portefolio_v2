import { SVGProps } from 'react'

const Cross = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="1.5rem"
    height="1.5rem"
    viewBox="0 0 24 24"
    strokeWidth={3}
    stroke="currentColor"
    {...props}
  >
    <title>Close icon</title>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
)

export default Cross
