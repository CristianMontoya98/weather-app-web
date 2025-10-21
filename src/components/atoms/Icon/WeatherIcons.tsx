const Icons = (icon: string) => {
	switch (icon) {
		case 'Thunderstorm':
			icon = 'src/assets/icons/thunderstorms-rain.svg';
			break;
		case 'Drizzle':
			icon = 'src/assets/icons/drizzle.svg';
			break;
		case 'Rain':
			icon = 'src/assets/icons/rain.svg';
			break;
		case 'Snow':
			icon = 'src/assets/icons/snow.svg';
			break;
		case 'Clear':
			icon = 'src/assets/icons/clear-day.svg';
			break;
		case 'Atmosphere':
			icon = 'src/assets/icons/weather.svg';
			break;
		case 'Clouds':
			icon = 'src/assets/icons/fog.svg';
			break;
		case 'Fog':
			icon = 'src/assets/icons/fog.svg';
			break;
		case 'Haze':
			icon = 'src/assets/icons/haze.svg';
			break;
		case 'Smoke':
			icon = 'src/assets/icons/smoke.svg';
			break;
		default:
			icon = 'src/assets/icons/clear-day.svg';
	}
	return icon;
};

export default Icons;
