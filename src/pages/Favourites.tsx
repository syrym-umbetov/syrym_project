import React from 'react';
import { useFavourites } from '../context/FavouritesContext';

const Favourites = () => {
  const {
    clearFavourites,
    removeFromFavourites,
    AddToFavourites,
    favouritesItems,
  } = useFavourites();
  return (
    <div>
      {favouritesItems && favouritesItems.map((item) => <div>{item}</div>)}
      yo
    </div>
  );
};

export default Favourites;
