import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../../services/api';
import { getUserLocation } from '../../helpers/get-user-location';
import { getUserTime } from '../../helpers/get-user-time';
import type { UserTime } from '../../types/user';
import Icons from '../atoms/Icon/WeatherIcons';
import TemperatureCard from '../molecules/Temperature-card';

export default function HomeComponent() {
	const [city, setCity] = useState<any>(null);
	const [weatherData, setWeatherData] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [currentTime, setCurrentTime] = useState<UserTime>(getUserTime().userTime);
	const [icon, setIcon] = useState<string>('');

	useEffect(() => {
		getUserLocation().then((data: any) => {
			setCity(data.locationData[0]);
			console.log('forecast', data.locationForecastData);
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
					console.log('weather', data);
					setIcon(data.weather[0].main);
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
		<div className='mt-5 flex flex-col items-center justify-center pb-7'>
			<h2 className='font-bold text-[var(--lightBlue)] text-[20px]'>{city?.local_names?.es || city?.name}</h2>
			<p className='font-bold text-[var(--lighterBlue)] text-[20px]'>{weatherData?.weather[0]?.description}</p>
			<img
				className='icon'
				src={Icons(icon)}
				alt='icon-weather'
				width={300}
				height={300}
			/>
			<p className='font-bold text-[var(--lighterBlue)] text-[20px]'>{currentTime?.date}</p>
			<p className='font-bold text-[var(--lightBlueTransparency)] text-[20px]'>{currentTime?.time}</p>
			<p className='font-bold text-[var(--lightBlue)] text-[64px]'>{weatherData?.main?.temp ? `${Math.trunc(weatherData.main.temp)}°C` : ''}</p>

			<div className='flex gap-3'>
				<TemperatureCard
					title='Max'
					data={weatherData?.main?.temp_max ? `${Math.trunc(weatherData.main.temp_max)}°C` : ''}
					image='src/assets/icons/thermometer-warmer.svg'
					alt='Imagen de termometro caliente'
				/>
				<TemperatureCard
					title='Min'
					data={weatherData?.main?.temp_min ? `${Math.trunc(weatherData.main.temp_min)}°C` : ''}
					image='src/assets/icons/thermometer-colder.svg'
					alt='Imagen de termometro frio'
				/>
			</div>
		</div>
	);
}
