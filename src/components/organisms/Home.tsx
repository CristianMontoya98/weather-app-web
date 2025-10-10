import { useFetch } from '../../hooks/useFetch';
import { API_ENDPOINTS } from '../../services/api';

export default function HomeComponent() {
	const url = API_ENDPOINTS.CURRENT_WEATHER('Bogotá');
	const data = useFetch(url);

	if (data.data) {
		console.log('Datos del clima:', data.data);
	}

	return (
		<div>
			<h2 className='font-bold text-[var(--lightBlue)] text-[20px]'>
				{(data?.data as any)?.name} {/* <span className='font-normal text-[var(--lightBlueTransparency)]'>Colombia</span> */}
			</h2>
		</div>
	);
}
