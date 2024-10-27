import { createSlice } from '@reduxjs/toolkit';
import { fetchPsychol } from './psychologiesOps';

const psychologiesSlice = createSlice({
  name: 'psychologies',
  initialState: { psychologies: [], loading: true },
  extraReducers: (builder) =>
    builder
      .addCase(fetchPsychol.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPsychol.fulfilled, (state, action) => {
        state.loading = false;

        state.psychologies = action.payload
          ? Object.values(action.payload).filter((item) => item !== null)
          : [];
      })
      .addCase(fetchPsychol.rejected, (state) => {
        state.loading = false;
      }),
});

export const psychologiesReducer = psychologiesSlice.reducer;