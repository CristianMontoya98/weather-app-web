import { useEffect, useState } from "react";
import type { WeatherUI } from "../../types/weather.mapper";

export interface City {
  id: number | string;
  name: string;
}

export function useFavorites() {
  const STORAGE_KEY = 'favoriteWeathers';
  const [favorites, setFavorites] = useState<WeatherUI[]>([]);
  useEffect(() => {
    const syncFavorites = () => {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        setFavorites([]);
        return;
      }

      try {
        const parsed: unknown = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setFavorites(parsed as WeatherUI[]);
        }
      } catch {
        setFavorites([]);
      }
    };

    document.addEventListener('visibilitychange', syncFavorites);

    return () => {
      document.removeEventListener('visibilitychange', syncFavorites);
    };
  }, []);

  // Load initial favorites from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;

      const parsed: unknown = JSON.parse(raw);

      if (Array.isArray(parsed)) {
        setFavorites(parsed as WeatherUI[]);
      }
    } catch (error) {
      console.error('Error reading favorite weathers:', error);
    }
  }, []);

  const persist = (data: WeatherUI[]) => {
    setFavorites(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  // Add weather to favorites
  const addFavorite = (weather: WeatherUI) => {
    if (favorites.some((fav) => fav.id === weather.id)) return;
    persist([...favorites, weather]);
  };

  // Remove favorite by ID
  const removeFavorite = (weatherId: WeatherUI['id']) => {
    persist(favorites.filter((fav) => fav.id !== weatherId));
  };

  const clearFavorites = () => {
    persist([]);
  };

  return {
    favorites,
    addFavorite,
    removeFavorite,
    clearFavorites,
  };
}
