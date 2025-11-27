export const fetchWeather = (url:string, setData:any, setIcon:any, setIsLoading:any) => {
    fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setData(data);
					console.log('weather', data);
					setIcon(data.weather[0].main);
					const loadingData = setInterval(() => {
						setIsLoading(false);
					}, 1000);
					return () => clearInterval(loadingData);
				}).catch((error) => {
					setIsLoading(false);
					console.log('error', error);
				} );
}