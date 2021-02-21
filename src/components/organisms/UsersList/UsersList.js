import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper } from './UsersList.styles';

const UserList = () => {
  return (
    <Wrapper>
      <ul>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default UserList;
