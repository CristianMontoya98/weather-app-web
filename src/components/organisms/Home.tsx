import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../../services/api';
import { getUserLocation } from '../../helpers/getUserLocation';

export default function HomeComponent() {
	const [city, setCity] = useState<any>(null);
	const [weatherData, setWeatherData] = useState<any>(null);

	useEffect(() => {
		getUserLocation().then((locationData: any) => {
			setCity(locationData[0]);
		});
	}, []);

	useEffect(() => {
		if (city) {
			const weatherUrl = API_ENDPOINTS.CURRENT_WEATHER(city.name);
			fetch(weatherUrl)
				.then((response) => response.json())
				.then((data) => {
					setWeatherData(data);
				});
		}
	}, [city]);

	if (weatherData) {
		console.log('Datos del clima:', weatherData);
	}

	return (
		<div className='mt-5'>
			<h2 className='font-bold text-[var(--lightBlue)] text-[20px]'>{city?.local_names.es}</h2>
		</div>
	);
}
