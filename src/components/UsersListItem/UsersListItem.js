import React from 'react';
import PropTypes from 'prop-types';
import styles from './UsersListItem.module.scss';

const UserListItem = ({ userData: { average, attendance = '0%', name } }) => {
  return (
    <li className={styles.container}>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>{attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

UserListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};

export default UserListItem;
