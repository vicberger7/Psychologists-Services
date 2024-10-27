/* eslint-disable react/prop-types */
import { UserAvatar } from '../UserAvatar/UserAvatar';
import { UserInfo } from '../UserInfo/UserInfo';
import css from './PsychologiesListItem.module.css';

export const PsychologiesListItem = ({ item }) => {
  return (
    <li className={css.container}>
      <UserAvatar img={item.avatar_url} name={item.name} />
      <UserInfo item={item} />
    </li>
  );
};