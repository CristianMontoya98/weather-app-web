import { useState } from 'react';
import SearchBar from '../molecules/SearchBar';
import SearchCardsContainer from '../molecules/SearchCardsContainer';

export default function SearchContainer() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [icon, setIcon] = useState<string>('');
	const [weatherData, setWeatherData] = useState<any>(null);

	return (
		<div className='w-full flex flex-col items-center'>
			<SearchBar
				setWeatherData={setWeatherData}
				setIcon={setIcon}
				setIsLoading={setIsLoading}
			/>
			<SearchCardsContainer
				isLoading={isLoading}
				weather={weatherData}
			/>
		</div>
	);
}
