export const ADD_TO_FAVOURITES = 'favourites/addToFavourites';
export const SET_PRODUCTS = 'favourites/setProducts';

export type Dispatch = {
  type: string;
  payload: number;
};

export const addToFavourites = (id: number) => (dispatch: any) => {
  dispatch({ type: ADD_TO_FAVOURITES, payload: id });
};
