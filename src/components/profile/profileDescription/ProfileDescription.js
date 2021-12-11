import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.png';

const ProfileDescription = ({ avatar = defaultAvatar, username, tag, location }) => {
  return (
    <div>
      <img src={avatar} alt="User avatar" />
      <p>{username}</p>
      {tag && <p>@{tag}</p>}
      {location && <p>{location}</p>}
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
