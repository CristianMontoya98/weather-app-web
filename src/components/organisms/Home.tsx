import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '../../services/api';
import { getUserLocation } from '../../helpers/get-user-location';
import { getUserTime } from '../../helpers/get-user-time';
import type { UserTime } from '../../types/user';
import { fetchWeather } from '../../services/fetch-weather';
import Icons from '../atoms/Icon/Weather-icons';
import TemperatureCard from '../molecules/Temperature-card';
import { mapWeatherToUI, type WeatherUI } from '../../types/weather.mapper';
import type { City } from '../../types/city.types';

export default function HomeComponent() {
	const [city, setCity] = useState<City | null>(null);
	const [weatherData, setWeatherData] = useState<WeatherUI | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [currentTime, setCurrentTime] = useState<UserTime>(getUserTime().userTime);
	useEffect(() => {
		getUserLocation().then((data: any) => {
			setCity(data.locationData[0]);
		});
		console.log(city);
		const timer = setInterval(() => {
			setCurrentTime(getUserTime().userTime);
		}, 60000);

		return () => clearInterval(timer);
	}, []);

	useEffect(() => {
		const getWeatherData = async () => {
			if (city) {
				try {
					setIsLoading(true);
					const apiData = await fetchWeather(API_ENDPOINTS.CURRENT_WEATHER(city.name));
					const uiData = mapWeatherToUI(apiData);
					setWeatherData(uiData);
				} catch (error) {
					setWeatherData(null);
					if (error instanceof Error) {
						console.error(error.message);
					}
				} finally {
					setIsLoading(false);
				}
			}
		};
		getWeatherData();
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
			<p className='font-bold text-[var(--lighterBlue)] text-[20px]'>{weatherData?.description}</p>
			<img
				className='icon'
				src={Icons(weatherData?.icon, false, currentTime?.moment)}
				alt='icon-weather'
				width={250}
				height={250}
			/>

			<p className='font-bold text-[var(--lighterBlue)] text-[20px]'>{currentTime?.date}</p>

			<p className='font-bold text-[var(--lightBlueTransparency)] text-[20px]'>{currentTime?.time}</p>

			<p className='font-bold text-[var(--lightBlue)] text-[64px]'>
				{weatherData?.temperature ? `${Math.trunc(weatherData.temperature)}°C` : ''}
			</p>
			<div className='flex gap-9 justify-center items-center mb-[23px]'>
				<div className='flex justify-center items-center'>
					<img
						src='/assets/icons/humidity.svg'
						alt='humidity icon'
						width={60}
						height={60}
					/>
					<p className='text-[var(--lighterBlue)] text-[20px]'>{weatherData?.humidity ? `${weatherData.humidity}%` : ''}</p>
				</div>
				<div className='flex justify-center items-center gap-4'>
					<img
						src='/assets/icons/mdi_sea-level-rise.svg'
						alt='Sea level icon'
						width={30}
						height={30}
					/>
					<p className='text-[var(--lighterBlue)] text-[20px]'>{weatherData?.sea_level ? `${weatherData.sea_level} mts` : ''}</p>
				</div>
			</div>
			<div className='flex gap-3'>
				<TemperatureCard
					title='Max'
					data={weatherData?.max ? `${Math.trunc(weatherData.max)}°C` : ''}
					image='/assets/icons/thermometer-warmer.svg'
					alt='Imagen de termometro caliente'
				/>
				<TemperatureCard
					title='Min'
					data={weatherData?.min ? `${Math.trunc(weatherData.min)}°C` : ''}
					image='/assets/icons/thermometer-colder.svg'
					alt='Imagen de termometro frio'
				/>
			</div>
		</div>
	);
}
