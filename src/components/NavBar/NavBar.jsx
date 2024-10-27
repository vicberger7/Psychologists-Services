import { useSelector } from 'react-redux';
import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { NavLinks } from '../NavLinks/NavLinks';
import { NavLog } from '../NavLog/NavLog';
import { selectLoading, selectUser } from '../../redux/selectors';
import { UserMenu } from '../UserMenu/UserMenu';
import ContentLoader from 'react-content-loader';

import css from './NavBar.module.css';

export const NavBar = () => {
  const isLoggedIn = useSelector(selectUser);
  const isLoading = useSelector(selectLoading);

  return (
    <div className={css.navBar}>
      <Container>
        <header className={css.container}>
          <nav className={css.linkMenu}>
            <Logo />
            <NavLinks />
          </nav>
          {isLoading ? (
            <ContentLoader
              speed={2}
              width={400}
              height={48}
              viewBox="0 0 400 160"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
            >
              <rect x="78" y="8" rx="20" ry="20" width="50%" height="90%" />
            </ContentLoader>
          ) : isLoggedIn ? (
            <UserMenu />
          ) : (
            <NavLog />
          )}
        </header>
      </Container>
      <div className={css.div}></div>
    </div>
  );
};