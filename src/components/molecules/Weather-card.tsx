import Icons from '../atoms/Icon/Weather-icons';

interface WeatherCardProps {
	weather: any;
	isFromFavorites: boolean;
}

export default function WeatherCard({ weather, isFromFavorites }: WeatherCardProps) {
	const handleClick = () => {
		window.location.href = '/detail';
		localStorage.setItem('searchedWeatherData', JSON.stringify(weather));
	};
	return (
		<div
			onClick={handleClick}
			className='mt-5 cursor-pointer shadow-[5px_7px_6px_0px_rgba(0,_0,_0,_0.1)] bg-gradient-to-br from-slate-900 to-slate-700 p-[14px] rounded-[13px] flex items-center w-[300px] transition-all duration-300 hover:scale-105 hover:-translate-y-2'
		>
			{isFromFavorites === true ? (
				<img
					src={`https://flagcdn.com/w40/${weather?.country.toLowerCase()}.png`}
					alt='country flag'
					width={90}
					height={30}
					className='mt-2 ms-5'
				/>
			) : (
				<img
					className='icon'
					src={Icons(weather?.icon, true)}
					alt='weather icon'
					width={90}
					height={90}
				/>
			)}

			<div className='bg-[var(--lightBlue)]/60 w-1 h-[120px] rounded-full ms-5'></div>
			<div className='w-full h-full flex flex-col items-center justify-center'>
				<p className='text-[var(--lightBlue)] text-[20px] font-bold ms-5'>{weather?.city}</p>
			</div>
		</div>
	);
}
