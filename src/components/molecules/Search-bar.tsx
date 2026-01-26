import { useState, type Dispatch, type SetStateAction } from 'react';
import SearchIcon from '../atoms/Icon/Search-icon';
import { fetchWeather } from '../../services/fetch-weather';
import { API_ENDPOINTS } from '../../services/api';
import React from 'react';
import { mapWeatherToUI, type WeatherUI } from '../../types/weather.mapper';
interface SearchBarProps {
	setWeatherData: Dispatch<SetStateAction<WeatherUI | null>>;
	setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setIsNotFound: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function SearchBar({ setWeatherData, setIsLoading, setIsNotFound }: SearchBarProps) {
	const [query, setQuery] = useState('');
	const getWeatherData = async () => {
		try {
			setIsLoading(true);
			const apiData = await fetchWeather(API_ENDPOINTS.CURRENT_WEATHER(query));
			const uiData = mapWeatherToUI(apiData);
			setWeatherData(uiData);
			setIsNotFound(false);
		} catch (error) {
			setWeatherData(null);
			setIsNotFound(true);
			console.error((error as { message: string }).message);
		} finally {
			setIsLoading(false);
		}
	};
	const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		getWeatherData();
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
				placeholder='Busca una ciudad...'
				className='bg-transparent focus:outline-none text-white placeholder:text-[var(--gray)] w-full'
			/>
			<button
				id='searchBtn'
				type='submit'
				onClick={handleSearch}
				className='cursor-pointer text-[var(--gray)] hover:text-[var(--lightBlue)] transition-colors duration-200'
			>
				<SearchIcon />
			</button>
		</form>
	);
}
