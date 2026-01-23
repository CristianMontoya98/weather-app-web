const Icons = (icon: string, international: boolean, time?: string) => {
	if (international) {
		switch (icon) {
			case 'Thunderstorm':
				icon = 'src/assets/icons/thunderstorms-rain.svg';
				break;
			case 'Drizzle':
				icon = 'src/assets/icons/partly-cloudy-drizzle.svg';
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
				icon = 'src/assets/icons/overcast.svg';
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
	} else {
		if (time === 'day') {
			switch (icon) {
				case 'Thunderstorm':
					icon = 'src/assets/icons/thunderstorms-day-rain.svg';
					break;
				case 'Drizzle':
					icon = 'src/assets/icons/partly-cloudy-day-drizzle.svg';
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
					icon = 'src/assets/icons/overcast-day.svg';
					break;
				case 'Fog':
					icon = 'src/assets/icons/fog-day.svg';
					break;
				case 'Haze':
					icon = 'src/assets/icons/haze-day.svg';
					break;
				case 'Smoke':
					icon = 'src/assets/icons/smoke.svg';
					break;
				default:
					icon = 'src/assets/icons/clear-day.svg';
			}
		} else if (time === 'night') {
			switch (icon) {
				case 'Thunderstorm':
					icon = 'src/assets/icons/thunderstorms-night-rain.svg';
					break;
				case 'Drizzle':
					icon = 'src/assets/icons/partly-cloudy-night-drizzle.svg';
					break;
				case 'Rain':
					icon = 'src/assets/icons/rain.svg';
					break;
				case 'Snow':
					icon = 'src/assets/icons/snow.svg';
					break;
				case 'Clear':
					icon = 'src/assets/icons/clear-night.svg';
					break;
				case 'Atmosphere':
					icon = 'src/assets/icons/weather.svg';
					break;
				case 'Clouds':
					icon = 'src/assets/icons/overcast-night.svg';
					break;
				case 'Fog':
					icon = 'src/assets/icons/fog-night.svg';
					break;
				case 'Haze':
					icon = 'src/assets/icons/haze-night.svg';
					break;
				case 'Smoke':
					icon = 'src/assets/icons/smoke.svg';
					break;
				default:
					icon = 'src/assets/icons/clear-night.svg';
			}
		}
	}

	return icon;
};

export default Icons;
