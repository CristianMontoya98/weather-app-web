import { useState } from 'react';
import SearchIcon from '../atoms/Icon/Search-icon';
import { fetchWeather } from '../../services/fetch-weather';
import { API_ENDPOINTS } from '../../services/api';
interface SearchBarProps {
	setWeatherData: any;
	setIcon: any;
	setIsLoading: any;
}
export default function SearchBar({ setWeatherData, setIcon, setIsLoading }: SearchBarProps) {
	const [query, setQuery] = useState('');
	const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setIsLoading(true);
		fetchWeather(API_ENDPOINTS.CURRENT_WEATHER(query), setWeatherData, setIcon, setIsLoading);
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
				type='submit'
				onClick={handleSearch}
				className='text-[var(--gray)] hover:text-[var(--lightBlue)] transition-colors duration-200'
			>
				<SearchIcon />
			</button>
		</form>
	);
}
