import { NavLink, useMatch } from 'react-router-dom';
import css from './NavLinks.module.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/selectors';

export const NavLinks = () => {
  const isLoggedIn = useSelector(selectUser);

  const homeMatch = useMatch('/');
  const psychologistsMatch = useMatch('/psychologists');
  const favoritesMatch = useMatch('/favorites');

  return (
    <div className={css.container}>
      <NavLink to="/home" className={homeMatch ? css.active : css.link}>
        Home
      </NavLink>
      <NavLink
        to="/psychologists"
        className={psychologistsMatch ? css.active : css.link}
      >
        Psychologists
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/favorites"
          className={favoritesMatch ? css.active : css.link}
        >
          Favorites
        </NavLink>
      )}
    </div>
  );
};