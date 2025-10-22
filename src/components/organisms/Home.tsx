import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../../services/api';
import { getUserLocation } from '../../helpers/get-user-location';
import { getUserTime } from '../../helpers/get-user-time';
import type { UserTime } from '../../types/user';
import Icons from '../atoms/Icon/WeatherIcons';

export default function HomeComponent() {
	const [city, setCity] = useState<any>(null);
	const [weatherData, setWeatherData] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [currentTime, setCurrentTime] = useState<UserTime>(getUserTime().userTime);
	const [icon, setIcon] = useState<string>('');

	useEffect(() => {
		getUserLocation().then((locationData: any) => {
			setCity(locationData[0]);
		});
		const timer = setInterval(() => {
			setCurrentTime(getUserTime().userTime);
		}, 60000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		if (city) {
			const weatherUrl = API_ENDPOINTS.CURRENT_WEATHER(city.name);
			fetch(weatherUrl)
				.then((response) => response.json())
				.then((data) => {
					setWeatherData(data);
					setIcon(data.weather[0].main);
					console.log(data);
					const loadingData = setInterval(() => {
						setIsLoading(false);
					}, 1000);
					return () => clearInterval(loadingData);
				});
		}
	}, [city]);

	if (isLoading) {
		return (
			<div className='mt-5 flex flex-col items-center justify-center w-screen h-screen'>
				<div className='loader'></div>
			</div>
		);
	}

	return (
		<div className='mt-5 flex flex-col items-center justify-center'>
			<h2 className='font-bold text-[var(--lightBlue)] text-[20px]'>{city?.local_names?.es || city?.name}</h2>
			<img
				className='icon'
				src={Icons(icon)}
				alt='icon-weather'
			/>
			<p className='font-bold text-[var(--lighterBlue)] text-[20px]'>{currentTime?.date}</p>
			<p className='font-bold text-[var(--lightBlueTransparency)] text-[20px]'>{currentTime?.time}</p>
			<p className='font-bold text-[var(--lightBlue)] text-[64px]'>{weatherData?.main?.temp}°C</p>
			<p className='font-bold text-[var(--lightBlue)] text-[20px]'>{weatherData?.weather[0]?.description}</p>
		</div>
	);
}
