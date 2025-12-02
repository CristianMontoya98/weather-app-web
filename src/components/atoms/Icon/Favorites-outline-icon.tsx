import * as React from 'react';

type FavoritesIconProps = {
	width?: number;
	height?: number;
	color?: string;
	className?: string;
};

export const FavoritesOutlineIcon: React.FC<FavoritesIconProps> = ({ width = 20, height = 19, color = 'currentColor', className }) => {
	return (
		<svg
			width={width}
			height={height}
			viewBox='0 0 29 29'
			fill='none'
			className={className}
			aria-hidden={true}
			role='img'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M14.6207 22.4146L14.4998 22.5354L14.3669 22.4146C8.62734 17.2067 4.83317 13.7629 4.83317 10.2708C4.83317 7.85417 6.64567 6.04167 9.06234 6.04167C10.9232 6.04167 12.7357 7.25 13.3761 8.89333H15.6236C16.264 7.25 18.0765 6.04167 19.9373 6.04167C22.354 6.04167 24.1665 7.85417 24.1665 10.2708C24.1665 13.7629 20.3723 17.2067 14.6207 22.4146ZM19.9373 3.625C17.8348 3.625 15.8169 4.60375 14.4998 6.13833C13.1828 4.60375 11.1648 3.625 9.06234 3.625C5.34067 3.625 2.4165 6.53708 2.4165 10.2708C2.4165 14.8262 6.52484 18.56 12.7478 24.2029L14.4998 25.7979L16.2519 24.2029C22.4748 18.56 26.5832 14.8262 26.5832 10.2708C26.5832 6.53708 23.659 3.625 19.9373 3.625Z'
				fill={color}
			/>
		</svg>
	);
};

export default FavoritesOutlineIcon;
