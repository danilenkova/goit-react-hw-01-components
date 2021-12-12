import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
};

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default FriendList;
