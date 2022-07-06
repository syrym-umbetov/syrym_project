import React from 'react';
import FavouritesItemCard from '../components/FavouritesItemCard';
import { useFavourites } from '../context/FavouritesContext';

const Favourites = () => {
  const { favouritesItems } = useFavourites();

  return (
    <div>
      {favouritesItems &&
        favouritesItems.map((id) => <FavouritesItemCard id={id} />)}
    </div>
  );
};

export default Favourites;
