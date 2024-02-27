import css from './FriendList.module.css';


const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
  return (
    <div className={css.friendItem}>
      <img className={css.friendImg} src={avatar} alt="Avatar" width="48" />
      <p className={css.friendName}>{name}</p>
      <p className={isOnline ? css.statusOnline : css.statusOffline}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
};

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;