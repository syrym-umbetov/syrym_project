import React, { useEffect } from 'react';
import FavouritesItemCard from '../components/FavouritesItemCard';
import { useFavourites } from '../context/FavouritesContext';

const Favourites = () => {
  const { favouritesItems } = useFavourites();

  return (
    <div>
      {favouritesItems &&
        favouritesItems.map((id) => <FavouritesItemCard key={id} id={id} />)}
      Опять рисует
      <hr />
    </div>
  );
};

export default Favourites;
