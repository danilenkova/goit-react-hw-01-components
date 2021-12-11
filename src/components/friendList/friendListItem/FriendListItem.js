import PropTypes from 'prop-types';
import defaultAvatar from './defaultAvatar.png';

const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <li>
      <span></span>
      <img src={avatar || defaultAvatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

FriendListItem.propeTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
