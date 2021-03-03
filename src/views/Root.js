import React, { useEffect, useState } from 'react';
import UserList from '../components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import { users as usersData } from 'data/users';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Form } from 'components/organisms/Form/Form';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

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

const Root = () => {
  const [user, setAddUser] = useState([]);
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
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/add-user">Add user</Link>
          </nav>
          <Switch>
            <Route path="/add-user">
              <Form handleAddUser={handleAddUser} formValue={formValue} handleValueChange={handleValueChange} />
            </Route>
            <Route path="/">
              <UserList deleteUser={deleteUser} user={user} isLoading={isLoading} />
            </Route>
          </Switch>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
