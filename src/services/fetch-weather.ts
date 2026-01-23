import { mapWeatherToUI } from "../types/weather.mapper";


export const fetchWeather = (url:string, setData:any, setIcon:any, setIsLoading:any) => {
    fetch(url)
				.then((response) => response.json())
				.then((data) => {
					setData(mapWeatherToUI(data));
					console.log(mapWeatherToUI(data));
					setIcon(data.weather[0].main);
					const loadingData = setInterval(() => {
						setIsLoading(false);
					}, 1000);
					return () => clearInterval(loadingData);
				}).catch((error) => {
					setIsLoading(false);
				} );
}