import HomeIcon from '../atoms/Icon/Home-icon';
import SearchIcon from '../atoms/Icon/Search-icon';
import FavoritesIcon from '../atoms/Icon/Favorites-icon';

interface NavProps {
	currentPage?: string;
}

export default function Nav({ currentPage }: NavProps) {
	const isHomeActive = currentPage === 'home';
	// Puedes añadir más como: const isSearchActive = currentPage === 'search';

	return (
		<nav
			role='navigation'
			aria-label='Primary'
			className='bg-[var(--blue)] rounded-lg w-[221px] h-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
		>
			<div className='flex h-full items-center justify-center gap-9'>
				<a
					aria-label='Home'
					href='/'
					className={`cursor-pointer transition-all duration-200 hover:scale-110 hover:text-[var(--lightBlue)] ${
						isHomeActive ? 'text-[var(--lightBlue)] scale-110' : 'text-[var(--gray)]'
					}`}
				>
					<HomeIcon
						width={20}
						height={21}
					/>
				</a>
				<a
					aria-label='Search'
					className='cursor-pointer text-[var(--gray)] hover:text-[var(--lightBlue)] transition-all duration-200 hover:scale-110' // Aplica la misma lógica aquí para otras páginas
					href='/search' // Es buena práctica añadir las rutas correctas
				>
					<SearchIcon
						width={20}
						height={21}
					/>
				</a>
				<a
					aria-label='Favorites'
					className='cursor-pointer text-[var(--gray)] hover:text-[var(--lightBlue)] transition-all duration-200 hover:scale-110'
					href='/favorites'
				>
					<FavoritesIcon
						width={20}
						height={19}
					/>
				</a>
			</div>
		</nav>
	);
}
