import HomeIcon from '../atoms/Icon/Home-icon';
import SearchIcon from '../atoms/Icon/Search-icon';
import FavoritesIcon from '../atoms/Icon/Favorites-icon';

export default function Nav() {
	return (
		<nav
			role='navigation'
			aria-label='Primary'
			className='bg-[var(--blue)] rounded-lg w-[221px] h-[50px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]'
		>
			<div className='flex h-full items-center justify-center gap-9'>
				<a
					className='cursor-pointer text-[var(--gray)] hover:text-[var(--lightBlue)] transition-all duration-200 hover:scale-110'
					href=''
				>
					<HomeIcon
						width={20}
						height={21}
					/>
				</a>
				<a
					className='cursor-pointer text-[var(--gray)] hover:text-[var(--lightBlue)] transition-all duration-200 hover:scale-110'
					href=''
				>
					<SearchIcon
						width={20}
						height={21}
					/>
				</a>
				<a
					className='cursor-pointer text-[var(--gray)] hover:text-[var(--lightBlue)] transition-all duration-200 hover:scale-110'
					href=''
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
