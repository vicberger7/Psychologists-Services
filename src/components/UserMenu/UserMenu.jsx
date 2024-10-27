import { useDispatch, useSelector } from 'react-redux';
import { selectUserName } from '../../redux/selectors';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../redux/auth/authOps';
import { FaUserLarge } from 'react-icons/fa6';

import css from './UserMenu.module.css';

export const UserMenu = () => {
  const userName = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <div className={css.container}>
      <NavLink className={css.link} to="/account">
        <div className={css.div}>
          <FaUserLarge color="var(--color-white)" />
        </div>
        <span className={css.linkText}>{userName}</span>
      </NavLink>
      <button
        className={css.button}
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </button>
    </div>
  );
};