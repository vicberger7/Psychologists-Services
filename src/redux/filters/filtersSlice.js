import { createSlice } from '@reduxjs/toolkit';


const filtersSlice = createSlice({
  name: 'filters',
  initialState: "A to Z",
      
  
  reducers: {
      setFilter(state, action) {
       return action.payload;  
      }
  }
});

export const filterReducer = filtersSlice.reducer;

export const { setFilter } = filtersSlice.actions