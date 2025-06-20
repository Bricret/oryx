import * as React from 'react'
import type { SVGProps } from 'react'
const Expo = (props: SVGProps<SVGSVGElement>) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		preserveAspectRatio='xMidYMid'
		viewBox='0 0 256 231'
		width='1em'
		height='1em'
		role='img'
		aria-labelledby='expoTitle'
		{...props}
	>
		<title id='expoTitle'>Expo Logo</title>
		<path
			d='M121 85c2-3 5-4 7-4 1 0 5 1 7 4 16 22 43 67 63 101l26 40c7 8 18 3 24-6s8-15 8-22c0-4-88-168-97-182-9-13-11-16-26-16h-11c-14 0-16 3-25 16C88 30 0 194 0 198c0 7 2 13 8 22s17 14 24 6l26-40c20-34 47-79 63-101Z'
			fill='#ffffff'
		/>
	</svg>
)
export default Expo
