import { useSelector } from 'react-redux';
import css from './AccountDetails.module.css';
import { selectUser } from '../../redux/selectors';
import { AccountDetailsItem } from '../AccountDetailsItem/AccountDetailsItem';
import { format } from 'date-fns';

export const AccountDetails = () => {
  const user = useSelector(selectUser);
  return user ? (
    <div className={css.container}>
      <div className={css.mainInfo}>
        <div className={css.avatar}>{user.displayName[0]}</div>
        <div>
          <h2 className={css.name}>{user.displayName}</h2>
          <p className={css.email}>{user.email}</p>
        </div>
      </div>
      <div className={css.line}></div>
      <AccountDetailsItem title={'Name'} value={user.displayName} />
      <AccountDetailsItem title={'Email account'} value={user.email} />
      <AccountDetailsItem title={'Mobile number'} value={'unknown'} />
      <AccountDetailsItem title={'Location'} value={'unknown'} />
      <AccountDetailsItem
        title={'Member since'}
        value={`${format(user.metadata.creationTime, 'PPP')} at ${format(
          user.metadata.creationTime,
          'p'
        )}`}
      />
      <AccountDetailsItem
        title={'Last online time'}
        value={`${format(user.metadata.lastSignInTime, 'PPP')} at ${format(
          user.metadata.lastSignInTime,
          'p'
        )}`}
      />
    </div>
  ) : null;
};