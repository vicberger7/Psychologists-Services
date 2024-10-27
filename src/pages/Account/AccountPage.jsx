// import css from './AccountPage.module.css';

import { Helmet } from 'react-helmet-async';
import { Container } from '../../components/Container/Container';
import { NavBar } from '../../components/NavBar/NavBar';
import { AccountDetails } from '../../components/AccountDetails/AccountDetails';

export default function AccountPage() {
  return (
    <div>
      <Helmet>
        <title>Account | Psychologists.Services</title>
      </Helmet>
      <NavBar />
      <Container>
        <AccountDetails />
      </Container>
    </div>
  );
}