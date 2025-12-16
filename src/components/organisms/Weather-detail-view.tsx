import { useState, useEffect, use } from 'react';
import Icons from '../atoms/Icon/Weather-icons';
import TemperatureCard from '../molecules/Temperature-card';
import BackIcon from '../atoms/Icon/Back-icon';
import FavoritesIcon from '../atoms/Icon/Favorites-icon';
import FavoritesOutlineIcon from '../atoms/Icon/Favorites-outline-icon';
import { useFavorites } from '../../helpers/hooks/use-favorites';

export default function WeatherDetailView() {
	const [weather, setWeather] = useState<any>(null);
	const [isFavorite, setIsFavorite] = useState<boolean>(false);
	const { addFavorite, removeFavorite, favorites } = useFavorites();

	const handleAddFavorite = () => {
		setIsFavorite(true);
		addFavorite(weather);
	};

	const handleRemoveFavorite = () => {
		setIsFavorite(false);
		removeFavorite(weather.id);
	};

	useEffect(() => {
		const weatherDataString = localStorage.getItem('searchedWeatherData');
		if (weatherDataString) {
			const weatherData = JSON.parse(weatherDataString);
			setWeather(weatherData);
			if (weatherData && favorites) {
				const isFav = favorites.some((fav: any) => fav.id === weatherData.id);
				setIsFavorite(isFav);
			}
		}
	}, [favorites]);

	const icon = weather?.weather[0]?.main;

	if (!weather) {
		return (
			<div className='mt-5 flex flex-col items-center justify-center w-screen h-screen'>
				<div className='loader'></div>
			</div>
		);
	}
	return (
		<div className='mt-5 flex flex-col items-center justify-center pb-7'>
			<div className='w-full flex justify-between px-5'>
				<BackIcon
					onClick={() => window.history.back()}
					className='text-[var(--lightBlue)] cursor-pointer font-bold transition-all duration-300 hover:scale-105 hover:-translate-y-2'
					width={29}
					height={29}
				/>
				{isFavorite ? (
					<FavoritesIcon
						onClick={handleRemoveFavorite}
						className='text-[var(--lightBlue)] cursor-pointer font-bold duration-300 hover:scale-105 hover:-translate-y-2'
						width={30}
						height={30}
					/>
				) : (
					<FavoritesOutlineIcon
						onClick={handleAddFavorite}
						className='text-[var(--lightBlue)] cursor-pointer font-bold duration-300 hover:scale-105 hover:-translate-y-2'
						width={30}
						height={30}
					/>
				)}
			</div>

			<h2 className='font-bold text-[var(--lightBlue)] text-[20px]'>{weather?.name}</h2>
			<p className='font-bold text-[var(--lighterBlue)] text-[20px]'>{weather?.weather[0]?.description}</p>
			<img
				className='icon'
				src={Icons(icon, true)}
				alt='weather icon'
				width={250}
				height={250}
			/>

			<p className='font-bold text-[var(--lightBlue)] text-[64px]'>{weather?.main?.temp ? `${Math.trunc(weather.main.temp)}°C` : ''}</p>
			<div className='flex gap-9 justify-center items-center mb-[23px]'>
				<div className='flex justify-center items-center'>
					<img
						src='src/assets/icons/humidity.svg'
						alt='humidity icon'
						width={60}
						height={60}
					/>
					<p className='text-[var(--lighterBlue)] text-[20px]'>{weather?.main?.humidity ? `${weather.main.humidity}%` : ''}</p>
				</div>
				<div className='flex justify-center items-center gap-4'>
					<img
						src='src/assets/icons/mdi_sea-level-rise.svg'
						alt='Sea level icon'
						width={30}
						height={30}
					/>
					<p className='text-[var(--lighterBlue)] text-[20px]'>{weather?.main?.sea_level ? `${weather.main.sea_level}mts` : ''}</p>
				</div>
			</div>
			<div className='flex gap-3'>
				<TemperatureCard
					title='Max'
					data={weather?.main?.temp_max ? `${Math.trunc(weather.main.temp_max)}°C` : ''}
					image='src/assets/icons/thermometer-warmer.svg'
					alt='Imagen de termometro caliente'
				/>
				<TemperatureCard
					title='Min'
					data={weather?.main?.temp_min ? `${Math.trunc(weather.main.temp_min)}°C` : ''}
					image='src/assets/icons/thermometer-colder.svg'
					alt='Imagen de termometro frio'
				/>
			</div>
		</div>
	);
}
