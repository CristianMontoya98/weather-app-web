import HomeIcon from '../atoms/Icon/Home-icon';
import SearchIcon from '../atoms/Icon/Search-icon';
import FavoritesIcon from '../atoms/Icon/Favorites-icon';

export default function Nav() {
	return (
		<div className='w-full flex justify-center'>
			<nav
				role='navigation'
				aria-label='Primary'
				className='bg-[var(--blue)] rounded-xl px-4 py-2 w-[221px] h-[35px]'
			>
				<ul className='flex items-center justify-center gap-9'>
					<li>
						<HomeIcon
							width={20}
							height={21}
							color={'var(--gray)'}
							className='cursor-pointer'
						/>
					</li>
					<li>
						<SearchIcon
							width={20}
							height={21}
							color={'var(--gray)'}
							className='cursor-pointer'
						/>
					</li>
					<li>
						<FavoritesIcon
							width={20}
							height={19}
							color={'var(--gray)'}
							className='cursor-pointer'
						/>
					</li>
				</ul>
			</nav>
		</div>
	);
}
