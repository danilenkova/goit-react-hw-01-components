import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.png';
import styles from './ProfileDescription.module.css';

const ProfileDescription = ({ avatar = defaultAvatar, username, tag, location }) => {
  return (
    <div className={styles.description}>
      <img src={avatar} alt="User avatar" className={styles.avatar} />
      <p className={styles.name}>{username}</p>
      {tag && <p className={styles.tag}>@{tag}</p>}
      {location && <p className={styles.location}>{location}</p>}
    </div>
  );
};

ProfileDescription.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
};

export default ProfileDescription;
