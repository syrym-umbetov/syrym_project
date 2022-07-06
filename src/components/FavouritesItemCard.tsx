import React, { FC } from 'react';

export type FavouritesItemCardProps = {
  id: number;
};

const FavouritesItemCard: FC<FavouritesItemCardProps> = ({ id }) => {
  return <div>{id}</div>;
};

export default FavouritesItemCard;
