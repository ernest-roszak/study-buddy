import React from 'react';
import PropTypes from 'prop-types';

const UserListItem = ({ userData: { average, attendance = '0%', name } }) => {
  return (
    <li>
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
