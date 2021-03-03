import React, { useEffect, useState } from 'react';
import { users as usersData } from 'data/users';
import UserListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList, StyledTitle } from './UsersList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

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

const initalState = {
  name: '',
  attendance: '',
  average: '',
};

const UserList = () => {
  const [user, setAddUser] = useState([]);
  // const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [formValue, setFormValue] = useState(initalState);

  const deleteUser = (name) => {
    const filteredUsers = user.filter((user) => user.name !== name);
    setAddUser(filteredUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    setAddUser([formValue, ...user]);
    setFormValue(initalState);
  };

  const handleValueChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
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
    <>
      <Wrapper as="form">
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" onChange={handleValueChange} value={formValue.name} />
        <FormField label="Attendance" id="attendance" name="attendance" onChange={handleValueChange} value={formValue.attendance} />
        <FormField label="Average" id="average" name="average" onChange={handleValueChange} value={formValue.average} />
        <Button type="submit" onClick={handleAddUser}>
          Add
        </Button>
      </Wrapper>
      <Wrapper>
        <StyledTitle>Students Lists</StyledTitle>
        <StyledTitle>{isLoading && 'Loading...'}</StyledTitle>
        <StyledList>
          {user.map((userData) => (
            <UserListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UserList;
