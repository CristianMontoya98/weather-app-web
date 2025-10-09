import { useFetch } from '../../hooks/useFetch';

export default function HomeComponent() {
	const data = useFetch('https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=2c08fac8651123694f93eb54a23246e2&units=metric');

	if (data.data) {
		console.log('Datos del clima:', data);
	}
	return (
		<div>
			<p>Hola home</p>
		</div>
	);
}
