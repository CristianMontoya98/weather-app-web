import NotFoundIllustration from '../atoms/illustrations/Not-found-illustration';

export default function NotFound() {
	return (
		<div className='flex flex-col items-center justify-center'>
			<NotFoundIllustration
				height={300}
				width={300}
			/>
			<h2 className='text-[var(--lightBlue)] font-bold text-[20px] w-[257px] text-center'>Ups, no pudimos encontrar lo que buscas.</h2>
			<p className='text-[18px] text-[var(--lightBlueTransparency)] italic'>Prueba con el nombre de una ciudad real.</p>
		</div>
	);
}
