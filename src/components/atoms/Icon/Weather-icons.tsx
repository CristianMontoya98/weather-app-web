const Icons = (icon: string | undefined, international: boolean, time?: string) => {
	if (international) {
		switch (icon) {
			case 'Thunderstorm':
				icon = 'public/assets/icons/thunderstorms-rain.svg';
				break;
			case 'Drizzle':
				icon = 'public/assets/icons/partly-cloudy-drizzle.svg';
				break;
			case 'Rain':
				icon = 'public/assets/icons/rain.svg';
				break;
			case 'Snow':
				icon = 'public/assets/icons/snow.svg';
				break;
			case 'Clear':
				icon = 'public/assets/icons/clear-day.svg';
				break;
			case 'Atmosphere':
				icon = 'public/assets/icons/weather.svg';
				break;
			case 'Clouds':
				icon = 'public/assets/icons/overcast.svg';
				break;
			case 'Fog':
				icon = 'public/assets/icons/fog.svg';
				break;
			case 'Haze':
				icon = 'public/assets/icons/haze.svg';
				break;
			case 'Smoke':
				icon = 'public/assets/icons/smoke.svg';
				break;
			default:
				icon = 'public/assets/icons/clear-day.svg';
		}
	} else {
		if (time === 'day') {
			switch (icon) {
				case 'Thunderstorm':
					icon = 'public/assets/icons/thunderstorms-day-rain.svg';
					break;
				case 'Drizzle':
					icon = 'public/assets/icons/partly-cloudy-day-drizzle.svg';
					break;
				case 'Rain':
					icon = 'public/assets/icons/rain.svg';
					break;
				case 'Snow':
					icon = 'public/assets/icons/snow.svg';
					break;
				case 'Clear':
					icon = 'public/assets/icons/clear-day.svg';
					break;
				case 'Atmosphere':
					icon = 'public/assets/icons/weather.svg';
					break;
				case 'Clouds':
					icon = 'public/assets/icons/overcast-day.svg';
					break;
				case 'Fog':
					icon = 'public/assets/icons/fog-day.svg';
					break;
				case 'Haze':
					icon = 'public/assets/icons/haze-day.svg';
					break;
				case 'Smoke':
					icon = 'public/assets/icons/smoke.svg';
					break;
				default:
					icon = 'public/assets/icons/clear-day.svg';
			}
		} else if (time === 'night') {
			switch (icon) {
				case 'Thunderstorm':
					icon = 'public/assets/icons/thunderstorms-night-rain.svg';
					break;
				case 'Drizzle':
					icon = 'public/assets/icons/partly-cloudy-night-drizzle.svg';
					break;
				case 'Rain':
					icon = 'public/assets/icons/rain.svg';
					break;
				case 'Snow':
					icon = 'public/assets/icons/snow.svg';
					break;
				case 'Clear':
					icon = 'public/assets/icons/clear-night.svg';
					break;
				case 'Atmosphere':
					icon = 'public/assets/icons/weather.svg';
					break;
				case 'Clouds':
					icon = 'public/assets/icons/overcast-night.svg';
					break;
				case 'Fog':
					icon = 'public/assets/icons/fog-night.svg';
					break;
				case 'Haze':
					icon = 'public/assets/icons/haze-night.svg';
					break;
				case 'Smoke':
					icon = 'public/assets/icons/smoke.svg';
					break;
				default:
					icon = 'public/assets/icons/clear-night.svg';
			}
		}
	}

	return icon;
};

export default Icons;
