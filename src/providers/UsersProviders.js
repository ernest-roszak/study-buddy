import { users as usersData } from 'data/users';
import React, { useState } from 'react';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  handleInputChange: () => {},
  deleteUser: () => {},
});

export const UsersProvider = ({ children }) => {
  const [users, setAddUser] = useState(usersData);

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
