import { ADD_TO_FAVOURITES } from '../actions/favouritesActions';

export type Favourite = {
  id: number;
};

export type InitialState = {
  favouritesItems: Favourite[];
  products: [];
};

const initialState: InitialState = {
  favouritesItems: [],
  products: [],
};

export function favourites(state = initialState, action: any) {
  const newState = { ...state };

  switch (action.type) {
    case ADD_TO_FAVOURITES:
      const existedFavourites = newState.favouritesItems.find(
        (favourite: Favourite) => favourite.id === action.payload.id
      );
      if (existedFavourites) {
        newState.favouritesItems = [...newState.favouritesItems];
      } else {
        newState.favouritesItems = [
          ...newState.favouritesItems,
          { id: action.payload },
        ];
      }
      break;
    default:
      return state;
  }
  return newState;
}
