import SearchingIllustration from '../atoms/illustrations/Searching-illustration';

interface SearchCardsProps {
	isLoading: boolean;
	weather: any;
}
export default function SearchCardsContainer({ isLoading, weather }: SearchCardsProps) {
	if (isLoading) {
		return (
			<div className='mt-5 flex flex-col items-center justify-center w-screen h-screen'>
				<div className='loader'></div>
			</div>
		);
	}
	if (weather) {
		return (
			<div className='w-full flex flex-col items-center'>
				<h1>Cards</h1>
			</div>
		);
	}
	return (
		<div className='w-full flex flex-col items-center mt-[100px]'>
			<SearchingIllustration
				height={300}
				width={300}
			/>
		</div>
	);
}
