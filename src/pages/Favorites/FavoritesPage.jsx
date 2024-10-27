// import css from './FavoritesPage.module.css';

import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { NavBar } from '../../components/NavBar/NavBar';
import { Favorites } from '../../components/Favorites/Favorites';

export default function FavoritesPage() {
  return (
    <div>
      <Helmet>
        <title>Favorites | Psychologists.Services</title>
      </Helmet>
      <NavBar />
      <Container>
        <Favorites />
      </Container>
    </div>
  );
}