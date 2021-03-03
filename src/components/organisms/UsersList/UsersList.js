import React from 'react';
import UserListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';

const UserList = ({ deleteUser, isLoading, user }) => {
  return (
    <Wrapper>
      <StyledTitle>Students Lists</StyledTitle>
      <StyledTitle>{isLoading && 'Loading...'}</StyledTitle>
      <StyledList>
        {user.map((userData) => (
          <UserListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UserList;
