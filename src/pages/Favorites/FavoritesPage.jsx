 import css from './FavoritesPage.module.css';

import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { NavBar } from '../../components/NavBar/NavBar';
import { Favorites } from '../../components/Favorites/Favorites';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import psychologist  from '../../assets/psychologist.jpeg'
export default function FavoritesPage() {

  const dataFavorites = useSelector(selectFavorites);

  return (
    <div>
      <Helmet>
        <title>Favorites | Psychologists.Services</title>
      </Helmet>
      <NavBar />
      <Container>
      {!dataFavorites.length ? (
          <>
          <div className={css.favoriteTitle}>
            It seems that your favorite list is currently empty. To add psychologists
            to your favorites, please visit the catalog where you can find a
            list of psychologists. From there, you can select the psychologist you like  and add them to your favorites by
            clicking on the like ( heart ) button. Once you&apos;ve added them to your
            favorites, you&apos;ll be able to view them here.
          </div>
         <img className={css.favoriteImg} src={psychologist} alt="psychologist"/>
          </>
        ) : (
          <Favorites data={dataFavorites} />
        )}
      </Container>
    </div>
  );
}