import Icons from '../atoms/Icon/Weather-icons';
import TemperatureCard from '../molecules/Temperature-card';

interface WeatherDetailViewProps {
	weather: any;
	icon: string;
}

export default function WeatherDetailView({ weather, icon }: WeatherDetailViewProps) {
	return (
		<div className='mt-5 flex flex-col items-center justify-center pb-7'>
			<h2 className='font-bold text-[var(--lightBlue)] text-[20px]'>{weather?.name}</h2>
			<p className='font-bold text-[var(--lighterBlue)] text-[20px]'>{weather?.weather[0]?.description}</p>
			<img
				className='icon'
				src={Icons(icon, true)}
				alt='weather icon'
				width={250}
				height={250}
			/>

			<p className='font-bold text-[var(--lightBlue)] text-[64px]'>{weather?.main?.temp ? `${Math.trunc(weather.main.temp)}°C` : ''}</p>
			<div className='flex gap-9 justify-center items-center mb-[23px]'>
				<div className='flex justify-center items-center'>
					<img
						src='src/assets/icons/humidity.svg'
						alt='humidity icon'
						width={60}
						height={60}
					/>
					<p className='text-[var(--lighterBlue)] text-[20px]'>{weather?.main?.humidity ? `${weather.main.humidity}%` : ''}</p>
				</div>
			</div>
			<div className='flex gap-3'>
				<TemperatureCard
					title='Max'
					data={weather?.main?.temp_max ? `${Math.trunc(weather.main.temp_max)}°C` : ''}
					image='src/assets/icons/thermometer-warmer.svg'
					alt='Imagen de termometro caliente'
				/>
				<TemperatureCard
					title='Min'
					data={weather?.main?.temp_min ? `${Math.trunc(weather.main.temp_min)}°C` : ''}
					image='src/assets/icons/thermometer-colder.svg'
					alt='Imagen de termometro frio'
				/>
			</div>
		</div>
	);
}
