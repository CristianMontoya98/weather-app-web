import Icons from '../atoms/Icon/WeatherIcons';

export default function HourForecastCard() {
	return (
		<div className='bg-[var(--blue)] p-[14px] rounded-[13px] flex flex-col items-center justify-center'>
			<img
				className='icon'
				src={Icons('Thunderstorm')}
				alt='icon-weather'
			/>
			<p className='text-[var(--lighterBlue)] text-[20px]'>4:00 pm</p>
			<p className='text-[var(--lightBlue)] text-[30px] font-bold'>20°C</p>
		</div>
	);
}
