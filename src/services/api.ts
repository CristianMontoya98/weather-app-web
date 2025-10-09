const API_KEY = import.meta.env.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const API_ENDPOINTS = {
    CURRENT_WEATHER: (city:string) => `${BASE_URL}/weather?q=${city}&appid=2c08fac8651123694f93eb54a23246e2&units=metric`
}