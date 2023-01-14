import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  const elements = friends.map(({ id, ...props }) => (
    <FriendListItem key={id} {...props} />
  ));
  return (
    <>
      <ul className={css.friendList}>{elements}</ul>
    </>
  );
};

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};