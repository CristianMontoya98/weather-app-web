const API_KEY = import.meta.env.PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const API_ENDPOINTS = {
    CURRENT_WEATHER: (city:string) => `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
}