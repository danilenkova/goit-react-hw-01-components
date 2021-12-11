import PropTypes from 'prop-types';
import ProfileDescription from './profileDescription/ProfileDescription';
import StatsList from './stats/statsList/StatsList';

const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <div>
      <ProfileDescription
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
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
