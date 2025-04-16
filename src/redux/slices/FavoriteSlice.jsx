import { createSlice } from "@reduxjs/toolkit";

const FavoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const exists = state.favorites.find(item => item.id === action.payload.id);
      if (exists) {
        state.favorites = state.favorites.filter(item => item.id !== action.payload.id);
      } else {
        state.favorites.push(action.payload);
      }
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = FavoriteSlice.actions;
export default FavoriteSlice.reducer;
