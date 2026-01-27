import type { WeatherData } from './weather.types';

/**
 * Modelo que el UI realmente necesita
 */
export interface WeatherUI {
  id:number
  city: string;
  temperature: number;
  feelsLike: number;
  min: number;
  max: number;
  description: string;
  icon: string;
  humidity: number;
  windSpeed: number;
  sea_level?: number;
  country?: string;
}

/**
 * Mapper de API → UI
 */
export const mapWeatherToUI = (data: WeatherData): WeatherUI => {
  const weather = data?.weather[0];

  return {
    id: data?.id,
    city: data?.name,
    temperature: Math.round(data?.main?.temp),
    feelsLike: Math.round(data?.main.feels_like),
    min: Math.round(data?.main?.temp_min),
    max: Math.round(data?.main?.temp_max),
    description: weather?.description,
    icon: weather?.main,
    humidity: data?.main?.humidity,
    windSpeed: data?.wind?.speed,
    sea_level: data?.main?.sea_level,
    country: data?.sys?.country
  };
};
