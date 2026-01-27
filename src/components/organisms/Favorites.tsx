import { useEffect } from 'react';
import { useFavorites } from '../../helpers/hooks/use-favorites';
import EmptyBoxIllustration from '../atoms/illustrations/Empty-box-illustration';
import WeatherCard from '../molecules/Weather-card';

export default function FavoritesComponent() {
	const { favorites } = useFavorites();
	useEffect(() => {
		localStorage.setItem('isFromSearch', 'false');
	}, []);
	return (
		<div>
			{favorites.length > 0 ? (
				<div className='flex flex-col justify-center items-center pt-10'>
					{favorites.map((city) => (
						<WeatherCard
							key={city.id}
							weather={city}
							isFromFavorites={true}
						/>
					))}
				</div>
			) : (
				<div className='flex flex-col items-center justify-center mt-5'>
					<EmptyBoxIllustration
						height={320}
						width={320}
					/>
					<h2 className='text-[var(--lightBlue)] font-bold text-[20px] text-center'>Todavía no tienes favoritos.</h2>
					<p className='text-[18px] text-[var(--lightBlueTransparency)] italic text-center p-5'>
						Agrega ciudades a tu lista de favoritos desde el detalle
					</p>
				</div>
			)}
		</div>
	);
}
