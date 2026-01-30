const Icons = (icon: string | undefined, international: boolean, time?: string) => {
	if (international) {
		switch (icon) {
			case 'Thunderstorm':
				icon = '/assets/icons/thunderstorms-rain.svg';
				break;
			case 'Drizzle':
				icon = '/assets/icons/partly-cloudy-drizzle.svg';
				break;
			case 'Rain':
				icon = '/assets/icons/rain.svg';
				break;
			case 'Snow':
				icon = '/assets/icons/snow.svg';
				break;
			case 'Clear':
				icon = '/assets/icons/clear-day.svg';
				break;
			case 'Atmosphere':
				icon = '/assets/icons/weather.svg';
				break;
			case 'Clouds':
				icon = '/assets/icons/overcast.svg';
				break;
			case 'Fog':
				icon = '/assets/icons/fog.svg';
				break;
			case 'Haze':
				icon = '/assets/icons/haze.svg';
				break;
			case 'Smoke':
				icon = '/assets/icons/smoke.svg';
				break;
			default:
				icon = '/assets/icons/clear-day.svg';
		}
	} else {
		if (time === 'day') {
			switch (icon) {
				case 'Thunderstorm':
					icon = '/assets/icons/thunderstorms-day-rain.svg';
					break;
				case 'Drizzle':
					icon = '/assets/icons/partly-cloudy-day-drizzle.svg';
					break;
				case 'Rain':
					icon = '/assets/icons/rain.svg';
					break;
				case 'Snow':
					icon = '/assets/icons/snow.svg';
					break;
				case 'Clear':
					icon = '/assets/icons/clear-day.svg';
					break;
				case 'Atmosphere':
					icon = '/assets/icons/weather.svg';
					break;
				case 'Clouds':
					icon = '/assets/icons/overcast-day.svg';
					break;
				case 'Fog':
					icon = '/assets/icons/fog-day.svg';
					break;
				case 'Haze':
					icon = '/assets/icons/haze-day.svg';
					break;
				case 'Smoke':
					icon = '/assets/icons/smoke.svg';
					break;
				default:
					icon = '/assets/icons/clear-day.svg';
			}
		} else if (time === 'night') {
			switch (icon) {
				case 'Thunderstorm':
					icon = '/assets/icons/thunderstorms-night-rain.svg';
					break;
				case 'Drizzle':
					icon = '/assets/icons/partly-cloudy-night-drizzle.svg';
					break;
				case 'Rain':
					icon = '/assets/icons/rain.svg';
					break;
				case 'Snow':
					icon = '/assets/icons/snow.svg';
					break;
				case 'Clear':
					icon = '/assets/icons/clear-night.svg';
					break;
				case 'Atmosphere':
					icon = '/assets/icons/weather.svg';
					break;
				case 'Clouds':
					icon = '/assets/icons/overcast-night.svg';
					break;
				case 'Fog':
					icon = '/assets/icons/fog-night.svg';
					break;
				case 'Haze':
					icon = '/assets/icons/haze-night.svg';
					break;
				case 'Smoke':
					icon = '/assets/icons/smoke.svg';
					break;
				default:
					icon = '/assets/icons/clear-night.svg';
			}
		}
	}

	return icon;
};

export default Icons;
