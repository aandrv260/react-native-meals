import { createContext, useState } from 'react';

const initialFavouritesState = {
  ids: [],
  addFavourite: id => {},
  removeFavourite: id => {},
};

export const FavouritesContext = createContext(initialFavouritesState);

export default function FavouritesContextProvider({ children }) {
  const [ids, setIds] = useState([]);

  const addFavourite = mealId => {
    setIds(prevState => [...prevState, mealId]);
  };

  const removeFavourite = mealId => {
    setIds(prevState => prevState.filter(id => id !== mealId));
  };

  const state = { ids, addFavourite, removeFavourite };

  return <FavouritesContext.Provider value={state}>{children}</FavouritesContext.Provider>;
}
