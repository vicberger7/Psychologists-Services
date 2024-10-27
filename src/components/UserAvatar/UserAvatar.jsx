/* eslint-disable react/prop-types */
import css from './UserAvatar.module.css';

export const UserAvatar = ({ img, name }) => {
  return (
    <div className={css.container}>
      <img
        src={img}
        alt={`Psychology ${name}`}
        width={96}
        height={96}
        className={css.img}
      />
      <div className={css.div}></div>
    </div>
  );
};