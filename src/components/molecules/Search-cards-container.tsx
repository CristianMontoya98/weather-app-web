import { useEffect } from 'react';
import SearchingIllustration from '../atoms/illustrations/Searching-illustration';
import NotFound from './Not-found';
import WeatherCard from './Weather-card';
import type { WeatherUI } from '../../types/weather.mapper';
import type { WeatherApiError } from '../../types/weather.api.types';

interface SearchCardsProps {
	isLoading: boolean;
	weather: WeatherUI | WeatherApiError | null;
	isNotFound: boolean;
}
export default function SearchCardsContainer({ isLoading, weather, isNotFound }: SearchCardsProps) {
	useEffect(() => {
		if (weather) {
			localStorage.setItem('searchedWeatherData', JSON.stringify(weather));
			localStorage.setItem('isFromSearch', 'true');
			console.log('Dataa in the search ', weather);
		}
	}, [weather]);
	if (isLoading) {
		return (
			<div className='mt-5 flex flex-col items-center justify-center w-screen h-screen'>
				<div className='loader'></div>
			</div>
		);
	}
	if (weather) {
		return (
			<div className='w-full flex flex-col items-center'>
				<WeatherCard
					weather={weather}
					isFromFavorites={false}
				/>
			</div>
		);
	}

	if (isNotFound) {
		return <NotFound />;
	} else {
		return (
			<div className='w-full flex flex-col items-center mt-[100px]'>
				<SearchingIllustration
					height={300}
					width={300}
				/>
			</div>
		);
	}
}
