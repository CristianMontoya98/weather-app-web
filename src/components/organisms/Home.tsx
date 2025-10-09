import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../services/api';

export default function HomeComponent() {
	const url = API_ENDPOINTS.CURRENT_WEATHER('London,uk');
	const data = useFetch(url);

	if (data.data) {
		console.log('Datos del clima:', data);
	}
	return (
		<div>
			<p>Hola home</p>
		</div>
	);
}
