const API_KEY = import.meta.env.PUBLIC_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_CODING_URL = 'http://api.openweathermap.org/geo/1.0'
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast'

export const API_ENDPOINTS = {
    CURRENT_WEATHER: (city:string) => `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=sp,es`,
    CURRENT_LOCATION: (lat:any, long:any) => `${GEO_CODING_URL}/reverse?lat=${lat}&lon=${long}&appid=${API_KEY}`,
    THREE_HOUR_FORECAST:(lat:any, long:any) => `${FORECAST_URL}?lat=${lat}&lon=${long}&cnt=3&appid=${API_KEY}&units=metric&lang=sp,es`
}