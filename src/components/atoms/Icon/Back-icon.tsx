import * as React from 'react';

type BackIconProps = {
	width?: number;
	height?: number;
	color?: string;
	className?: string;
	onClick?: (event: React.MouseEvent<SVGElement>) => void;
};

export const BackIcon: React.FC<BackIconProps> = ({
	width = 20,
	height = 19,
	color = 'currentColor',
	className,
	onClick,
}) => {
	return (
		<svg
			width={width}
			height={height}
			className={className}
			viewBox='0 0 26 26'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			onClick={onClick}
		>
			<path
				d='M26 13.8125H3.17383L13.165 23.8037L12.0225 24.9463L0.0761719 13L12.0225 1.05371L13.165 2.19629L3.17383 12.1875H26V13.8125Z'
				fill={color}
			/>
		</svg>
	);
};

export default BackIcon;
