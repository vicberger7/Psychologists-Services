import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./auth/authSlice";
import { psychologiesReducer } from "./psychologies/psychologiesSlice";
import { filterReducer } from "./filters/filtersSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistFavoritesConfig = {
  key: "favorites",
  storage,
};

const persistAuthConfig = {
  key: 'auth',
  storage, 
};

const persistedAuthReducer = persistReducer(persistAuthConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    psychologies: psychologiesReducer,
    filters: filterReducer,
    favorites: persistReducer(persistFavoritesConfig, favoritesReducer),
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
