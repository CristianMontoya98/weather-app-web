import Icons from '../atoms/Icon/Weather-icons';

interface WeatherCardProps {
	weather: any;
	icon: string;
}

export default function WeatherCard({ weather, icon }: WeatherCardProps) {
	const handleClick = () => {
		window.location.href = '/detail';
		localStorage.setItem('searchedWeatherData', JSON.stringify(weather));
	};

	return (
		<div
			onClick={handleClick}
			className='mt-20 cursor-pointer shadow-[5px_7px_6px_0px_rgba(0,_0,_0,_0.1)] bg-gradient-to-br from-slate-900 to-slate-700 p-[14px] rounded-[13px] flex items-center w-[300px] transition-all duration-300 hover:scale-105 hover:-translate-y-2'
		>
			<img
				className='icon'
				src={Icons(icon, true)}
				alt='weather icon'
				width={90}
				height={90}
			/>
			<div className='bg-[var(--lightBlue)]/60 w-1 h-[120px] rounded-full'></div>
			<div className='w-full h-full flex flex-col items-center justify-center'>
				<p className='text-[var(--lightBlue)] text-[20px] font-bold ms-5'>{weather?.name}</p>
			</div>
		</div>
	);
}
