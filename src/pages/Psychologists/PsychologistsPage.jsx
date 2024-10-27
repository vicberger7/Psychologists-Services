// import css from './PsychologistsPage.module.css';

import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { NavBar } from '../../components/NavBar/NavBar';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchPsychol } from '../../redux/psychologies/psychologiesOps';
import { Psychologies } from '../../components/Psychologies/Psychologies';

export default function PsychologistsPage() {
  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(fetchPsychol({ startAt: 0, limit: 3 }));
  } ,[dispatch]);

  return (
    <div>
      <Helmet>
        <title>Psychologists | Psychologists.Services</title>
      </Helmet>
      <NavBar />
      <Container>
        <Psychologies />
      </Container>
    </div>
  );
}