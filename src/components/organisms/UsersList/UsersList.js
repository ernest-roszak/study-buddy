import React, { useEffect, useState } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UserList = () => {
  const [user, setAddUser] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  const deleteUser = (name) => {
    const filteredUsers = user.filter((user) => user.name !== name);
    setAddUser(filteredUsers);
    console.log('user', user);
  };

  const mockAPI = (success) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (usersData) {
          resolve([...usersData]);
        } else {
          reject({ message: 'error' });
        }
      }, 2000);
    });
  };
  useEffect(() => {
    setIsLoading(true);
    mockAPI()
      .then((response) => {
        setIsLoading(false);
        setAddUser(response);
      })
      .catch((err) => console.log('err', err));
  }, []);

  return (
    <Wrapper>
      <h1>{isLoading && 'Loading...'}</h1>
      <StyledList>
        {user.map((userData) => (
          <UserListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UserList;
