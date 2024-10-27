import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth';
import { auth } from '../../firebase';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (signUpData, thunkAPI) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        signUpData.email,
        signUpData.password
      );

      await updateProfile(userCredential.user, {
        displayName: signUpData.name,
      });

      await signInWithEmailAndPassword(
        auth,
        signUpData.email,
        signUpData.password
      );

      return userCredential;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (signUpData, thunkAPI) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        signUpData.email,
        signUpData.password
      );

      return userCredential;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const userCredential = await signOut(auth);

    return userCredential;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});