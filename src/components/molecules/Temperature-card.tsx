interface TemperatureCardProps {
	title: string;
	data: string;
	image: string;
	alt: string;
}

export default function TemperatureCard({ title, data, image, alt }: TemperatureCardProps) {
	return (
		<div className='bg-[var(--blue)] p-[14px] rounded-[13px] flex flex-col items-center justify-center'>
			<div className='flex flex-col items-center'>
				<p className='text-[var(--lighterBlue)] text-[20px]'>{title}</p>
				<img
					src={image}
					alt={alt}
					width={70}
					height={70}
				/>
			</div>

			<p className='text-[var(--lightBlue)] text-[30px] font-bold'>{data}</p>
		</div>
	);
}
