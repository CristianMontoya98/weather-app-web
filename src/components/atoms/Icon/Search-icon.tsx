import * as React from 'react';

type SearchIconProps = {
	width?: number;
	height?: number;
	color?: string;
	className?: string;
};

export const SearchIcon: React.FC<SearchIconProps> = ({ width = 20, height = 21, color = 'currentColor', className }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 20 21'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={className}
			aria-hidden={true}
			role='img'
		>
			<path
				d='M9.16667 17.3333C13.677 17.3333 17.3333 13.677 17.3333 9.16667C17.3333 4.65634 13.677 1 9.16667 1C4.65634 1 1 4.65634 1 9.16667C1 13.677 4.65634 17.3333 9.16667 17.3333Z'
				stroke={color}
				strokeWidth='2'
			/>
			<path
				d='M18.2085 19.6667L14.7085 16.1667'
				stroke={color}
				strokeWidth='2'
				strokeLinecap='round'
			/>
		</svg>
	);
};

export default SearchIcon;
