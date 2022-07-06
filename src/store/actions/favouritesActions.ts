export const ADD_TO_FAVOURITES = 'favourites/addToFavourites';

export const addToFavourites = (id: number) => (dispatch: any) => {
  dispatch({ type: ADD_TO_FAVOURITES, payload: id });
};
