import { createContext, ReactNode, useContext, useState } from 'react';
import { useLocalStorage } from '../components/hooks/useLocalStorage';
import Favourites from '../pages/Favourites';

type FavouritesType = {
  clearFavourites: () => void;
  removeFromFavourites: (id: number) => void;
  AddToFavourites: (id: number) => void;
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
  const [favouritesItems, setFavouritesItems] = useState<number[]>([]);

  function AddToFavourites(id: number) {
    if (favouritesItems.find((item) => item === id) == null) {
      setFavouritesItems([...favouritesItems, id]);
    }
  }
  function removeFromFavourites(id: number) {
    setFavouritesItems((currItems) => {
      return currItems.filter((item) => item !== id);
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
        AddToFavourites,
        favouritesItems,
      }}
    >
      {children}
      <Favourites />
    </FavouritesContext.Provider>
  );
}
