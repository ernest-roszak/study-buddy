import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  handleInputChange: () => {},
  deleteUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setAddUser] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setAddUser(data.students))
      .catch((err) => console.log('err', err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setAddUser(filteredUsers);
  };

  const handleAddUser = (formValues) => {
    setAddUser([formValues, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};
