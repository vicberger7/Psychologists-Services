import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './components/SharedLayout/SharedLayout';
import { lazy, useEffect } from 'react';
import { auth } from './firebase.js';
import { loginUser, setLoading } from './redux/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoading, selectUser } from './redux/selectors';
import { Toaster } from 'react-hot-toast';

const HomePage = lazy(() => import('./pages/Home/HomePage'));
const PsychologistsPage = lazy(() =>
  import('./pages/Psychologists/PsychologistsPage')
);
const FavoritesPage = lazy(() => import('./pages/Favorites/FavoritesPage'));
const AccountPage = lazy(() => import('./pages/Account/AccountPage'));

export const App = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
     
      if (!authUser) return dispatch(setLoading(false));
      dispatch(loginUser({displayName:authUser.displayName, email:authUser.email}));
      dispatch(setLoading(false));
    });
  }, [dispatch]);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/psychologists" element={<PsychologistsPage />} />
          {isLoggedIn || isLoading ? (
            <Route path="/favorites" element={<FavoritesPage />} />
          ) : null}
          {isLoggedIn || isLoading ? (
            <Route path="/account" element={<AccountPage />} />
          ) : null}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </>
  );
};