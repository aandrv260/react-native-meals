import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  ids: [],
};

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addFavourite(state, action) {
      const mealId = action.payload;
      state.ids.push(mealId);
    },

    removeFavourite(state, action) {
      const mealId = action.payload;
      state.ids = state.ids.filter(id => id !== mealId);
    },
  },
});

export const favouritesActions = favouritesSlice.actions;

const reduxStore = configureStore({
  reducer: {
    favourites: favouritesSlice.reducer,
  },
});

export default reduxStore;
