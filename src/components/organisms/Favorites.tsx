import { useFavorites } from '../../helpers/hooks/use-favorites';
import WeatherCard from '../molecules/Weather-card';

export default function FavoritesComponent() {
	const { favorites } = useFavorites();

	return (
		<div>
			{favorites.length > 0 ? (
				<div className='flex flex-col justify-center items-center'>
					{favorites.map((city) => (
						<WeatherCard
							key={city.id}
							weather={city}
							icon={city.weather[0].main}
						/>
					))}
				</div>
			) : (
				<p className='text-white text-center'>You have no favorite cities yet.</p>
			)}
		</div>
	);
}
