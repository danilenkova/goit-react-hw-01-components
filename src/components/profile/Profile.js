import PropTypes from 'prop-types';
import ProfileDescription from './profileDescription';
import StatsList from './statsList';
import styles from './Profile.module.css';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <ProfileDescription username={username} tag={tag} location={location} avatar={avatar} />
      {stats && <StatsList stats={stats} />}
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};

export default Profile;
