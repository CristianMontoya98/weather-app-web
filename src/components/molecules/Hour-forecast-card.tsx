import Icons from '../atoms/Icon/WeatherIcons';
interface HourForecastProps {
	title: string;
	data: string;
}

export default function HourForecastCard({ title, data }: HourForecastProps) {
	return (
		<div className='bg-[var(--blue)] p-[14px] rounded-[13px] flex flex-col items-center justify-center'>
			<p className='text-[var(--lighterBlue)] text-[20px]'>{title}</p>
			<p className='text-[var(--lightBlue)] text-[30px] font-bold'>{data}</p>
		</div>
	);
}
