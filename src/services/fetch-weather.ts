import { mapWeatherToUI } from "../types/weather.mapper";
import type { WeatherData } from '../types/weather.types';
import type { WeatherApiError } from '../types/weather.api.types';

export const fetchWeather = async (url: string): Promise<WeatherData> => {
  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw data as WeatherApiError;
  }

  return data as WeatherData;
};