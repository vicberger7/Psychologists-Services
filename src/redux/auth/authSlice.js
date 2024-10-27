import { createSlice } from '@reduxjs/toolkit';
import { logOut, signIn, signUp } from './authOps';
import toast from 'react-hot-toast';

// const storedAuth = localStorage.getItem('auth');
// const initialAuthState = storedAuth
//   ? JSON.parse(storedAuth)
//   : { loading: true, user: null, isLoggedIn: false };

const authSlice = createSlice({
  name: 'auth',
  initialState: { loading: true, user: null, isLoggedIn: false },
 
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      // state.isLoggedIn = true;
      // localStorage.setItem('auth', JSON.stringify({
      //   isLoggedIn: true,
      //   user: action.payload
      // }));
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(signUp.pending, (state) => {
        state.loading = true;
      })
      .addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      })

      // localStorage.setItem('auth', JSON.stringify({
      //   isLoggedIn: true,
      //   user: action.payload.user
      // }));
      // })


    .addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        if (action.payload === 'Firebase: Error (auth/email-already-in-use).') {
          return toast(`Email already in use`, {
            icon: '❌',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
              marginTop: '100px',
            },
          });
        }
        toast(`${action.payload}`, {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            marginTop: '100px',
          },
        });
      })
      .addCase(signIn.pending, (state) => {
        state.loading = true;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
      

        // localStorage.setItem('auth', JSON.stringify({
        //   isLoggedIn: true,
        //   user: action.payload.user
        // }));

        toast(`Welcome back, ${action.payload.user.displayName}!`, {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            marginTop: '100px',
          },
        });
      })
      .addCase(signIn.rejected, (state) => {
        state.loading = false;
        toast(`Email or password wrong`, {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            marginTop: '100px',
          },
        });
      })
      .addCase(logOut.pending, (state) => {
        state.loading = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.user = null;

        localStorage.removeItem('auth');
      })
      .addCase(logOut.rejected, (state, action) => {
        state.loading = false;
        toast(`${action.payload}`, {
          icon: '❌',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
            marginTop: '100px',
          },
        });
      }),
});

export const authReducer = authSlice.reducer;

export const { loginUser, setLoading } = authSlice.actions;