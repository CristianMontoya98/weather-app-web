import { useFavorites } from '../../helpers/hooks/use-favorites';

export default function FavoritesComponent() {
	const { favorites, removeFavorite } = useFavorites();
	console.log(favorites);
	return (
		<div>
			<h1>Favoritos Component</h1>
		</div>
	);
}
