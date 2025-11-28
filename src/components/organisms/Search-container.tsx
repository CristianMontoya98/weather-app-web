import { useState } from 'react';
import SearchBar from '../molecules/Search-bar';
import SearchCardsContainer from '../molecules/Search-cards-container';
import WeatherDetailView from './Weather-detail-view';

export default function SearchContainer() {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [icon, setIcon] = useState<string>('');
	const [weatherData, setWeatherData] = useState<any>(null);
	const [showDetail, setShowDetail] = useState<boolean>(false);

	return (
		<div className='w-full flex flex-col items-center'>
			{!showDetail && (
				<SearchBar
					setWeatherData={setWeatherData}
					setIcon={setIcon}
					setIsLoading={setIsLoading}
				/>
			)}

			{showDetail && weatherData ? (
				<WeatherDetailView
					weather={weatherData}
					icon={icon}
				/>
			) : (
				<SearchCardsContainer
					icon={icon}
					isLoading={isLoading}
					weather={weatherData}
					onCardClick={() => setShowDetail(true)}
				/>
			)}
		</div>
	);
}
