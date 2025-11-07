import { useState } from 'react';
import SearchIcon from '../atoms/Icon/Search-icon';
import { fetchWeather } from '../../services/fetch-weather';
import { API_ENDPOINTS } from '../../services/api';

export default function SearchBar() {
	const [weatherData, setWeatherData] = useState<any>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [query, setQuery] = useState('');
	const [icon, setIcon] = useState<string>('');
	const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		fetchWeather(API_ENDPOINTS.CURRENT_WEATHER(query), setWeatherData, setIcon, setIsLoading);
		console.log(weatherData);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<form className='mt-5 ps-5 pe-5 flex items-center gap-2 bg-[var(--blue)] p-2 rounded-3xl max-w-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[221px]'>
			<input
				type='text'
				value={query}
				onChange={handleChange}
				placeholder='Buscar ciudad...'
				className='bg-transparent focus:outline-none text-white placeholder:text-[var(--gray)] w-full'
			/>
			<button
				onClick={handleSearch}
				className='text-[var(--gray)] hover:text-[var(--lightBlue)] transition-colors duration-200'
			>
				<SearchIcon />
			</button>
		</form>
	);
}
