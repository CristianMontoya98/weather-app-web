import { useState } from 'react';
import SearchIcon from '../atoms/Icon/Search-icon';

export default function SearchBar() {
	const [query, setQuery] = useState('');

	const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log(query);
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
	};

	return (
		<form className='flex items-center gap-2 bg-[var(--blue)] p-2 rounded-lg w-full max-w-md shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
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
