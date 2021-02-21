import React from 'react';
import { users } from 'data/users';
import UserListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UserList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UserListItem userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UserList;
