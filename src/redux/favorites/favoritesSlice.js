 import { createSlice } from "@reduxjs/toolkit";




const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.avatar_url === action.payload.avatar_url
      );

    
      if (index === -1) {
        state.favorites = [...state.favorites, action.payload];
      }
    },

    removeFavorite: (state, action) => {
      const index = state.favorites.findIndex(
        (favorite) => favorite.avatar_url === action.payload.avatar_url
      );

    
      if (index !== -1) {
        state.favorites.splice(index, 1);
      }
    },

    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const { addFavorite, removeFavorite, clearFavorites } = favoritesSlice.actions;
export const favoritesReducer =  favoritesSlice.reducer;
