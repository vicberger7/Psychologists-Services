import { NavBar } from '../../components/NavBar/NavBar';
import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { HomeContent } from '../../components/HomeContent/HomeContent';
import { HomeImage } from '../../components/HomeImage/HomeImage';

import css from './HomePage.module.css';
export default function HomePage() {
  return (
    <div className={css.container}>
      <Helmet>
        <title>Home | Psychologists.Services</title>
      </Helmet>
      <NavBar />
      <Container>
        <div className={css.contentWrapper}>
          <HomeContent />
          <HomeImage />
        </div>
      </Container>
    </div>
  );
}