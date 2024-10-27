import css from './AccountDetailsItem.module.css';

export const AccountDetailsItem = ({ title, value }) => {
  return (
    <div>
      <div className={css.details}>
        <h3 className={css.detailsKey}>{title}</h3>
        <p className={css.detailsValue}>{value}</p>
      </div>
      <div className={css.line}></div>
    </div>
  );
};