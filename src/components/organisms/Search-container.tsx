import { useState } from 'react';
import SearchBar from '../molecules/Search-bar';
import SearchCardsContainer from '../molecules/Search-cards-container';
import type { WeatherUI } from '../../types/weather.mapper';

export default function SearchContainer() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [weatherData, setWeatherData] = useState<WeatherUI | null>(null);
	const [isNotFound, setIsNotFound] = useState<boolean>(false);
	return (
		<div className='w-full flex flex-col items-center'>
			<SearchBar
				setWeatherData={setWeatherData}
				setIsLoading={setIsLoading}
				setIsNotFound={setIsNotFound}
			/>

			<SearchCardsContainer
				isLoading={isLoading}
				weather={weatherData}
				isNotFound={isNotFound}
			/>
		</div>
	);
}
