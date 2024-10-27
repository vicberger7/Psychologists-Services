import { NavLink } from 'react-router-dom';
import css from './Logo.module.css';

export const Logo = () => {
  return (
    <NavLink to="/home">
      <p className={css.logo}>
        psychologists.
        <span className={css.span}>services</span>
      </p>
    </NavLink>
  );
};