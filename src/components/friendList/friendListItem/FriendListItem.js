import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.png';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.isOnline : styles.isOffline}></span>
      <img src={avatar || defaultAvatar} alt="User avatar" width="48" className={styles.avatar} />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

FriendListItem.propeTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
