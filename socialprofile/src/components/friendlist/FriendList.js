import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styles.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={Styles.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={Styles.item} key={id}>
          <span className={isOnline ? Styles.green : Styles.red}>
            {isOnline}
          </span>
          <img
            className={Styles.avatar}
            src={avatar}
            alt="no facephoto eddit"
            width="48"
          />
          <p className={Styles.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.defaultProps = {
  friends: [],
  // eslint-disable-next-line no-dupe-keys
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar:
        'https://res.cloudinary.com/teepublic/image/private/s--MENCXOy4--/t_Resized%20Artwork/c_fit,g_north_west,h_954,w_954/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_ffffff,e_outline:48/co_ffffff,e_outline:inner_fill:48/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1446226002/production/designs/201523_1.jpg',
    }),
  ),
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default FriendList;
