import { useEffect, useState } from "react";

export interface City {
  id: number | string;
  name: string;
  [key: string]: any;
}

export function useFavorites() {
  const STORAGE_KEY = "favoriteCities";
  const [favorites, setFavorites] = useState<City[]>([]);

  // Load initial favorites from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed: City[] = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      }
    } catch (error) {
      console.error("Error reading favorite cities:", error);
    }
  }, []);

  // Save favorites array to localStorage
  const persist = (data: City[]) => {
    setFavorites(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  // Add a new city to favorites
  const addFavorite = (city: City) => {
    if (favorites.some((fav) => fav.id === city.id)) return;

    const updated = [...favorites, city];
    persist(updated);
  };

  // Remove favorite by ID
  const removeFavorite = (cityId: City["id"]) => {
    const updated = favorites.filter((city) => city.id !== cityId);
    persist(updated);
  };

  // Optional: clear all favorites
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
