import { useEffect } from 'react';
import SearchingIllustration from '../atoms/illustrations/Searching-illustration';
import NotFound from './Not-found';
import WeatherCard from './Weather-card';

interface SearchCardsProps {
	isLoading: boolean;
	weather: any;
	icon: string;
}
export default function SearchCardsContainer({ isLoading, weather, icon }: SearchCardsProps) {
	useEffect(() => {
		if (weather) {
			localStorage.setItem('searchedWeatherData', JSON.stringify(weather));
			localStorage.setItem('isFromSearch', 'true');
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
		if (weather?.cod === '404') {
			return <NotFound />;
		} else {
			return (
				<div className='w-full flex flex-col items-center'>
					<WeatherCard
						weather={weather}
						icon={icon}
						isFromFavorites={false}
					/>
				</div>
			);
		}
	}
	return (
		<div className='w-full flex flex-col items-center mt-[100px]'>
			<SearchingIllustration
				height={300}
				width={300}
			/>
		</div>
	);
}
