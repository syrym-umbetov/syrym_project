import { createContext, ReactNode, useContext, useState } from 'react';
import { useLocalStorage } from '../components/hooks/useLocalStorage';
import Favourites from '../pages/Favourites';

type FavouritesType = {
  clearFavourites: () => void;
  removeFromFavourites: (id: number) => void;
  addToFavourites: (id: number) => void;
  favouritesItems: number[];
};

type FavouritesProviderProps = {
  children: ReactNode;
};

const FavouritesContext = createContext({} as FavouritesType);

export function useFavourites() {
  return useContext(FavouritesContext);
}

export function FavouritesProvider({ children }: FavouritesProviderProps) {
  const [favouritesItems, setFavouritesItems] = useLocalStorage<number[]>(
    'favourites',
    []
  );

  const addToFavourites = (id: number) => {
    if (!favouritesItems.includes(id))
      setFavouritesItems(favouritesItems.concat(id));
  };
  function removeFromFavourites(id: number) {
    setFavouritesItems((currItems) => {
      return currItems?.filter((item) => item !== id);
    });
  }
  const clearFavourites = () => {
    setFavouritesItems([]);
  };
  return (
    <FavouritesContext.Provider
      value={{
        clearFavourites,
        removeFromFavourites,
        addToFavourites,
        favouritesItems,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
}
