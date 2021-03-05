import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { users as usersData } from 'data/users';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';

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

const initialState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [users, setAddUser] = useState([]);
  const [isLoading, setIsLoading] = useState([]);
  const [formValues, setFormValues] = useState(initialState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setAddUser(filteredUsers);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    setAddUser([formValues, ...users]);
    setFormValues(initialState);
  };

  const handleInputChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
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
        <MainTemplate>
          <Wrapper>
            <Switch>
              <Route path="/add-user">
                <AddUser handleAddUser={handleAddUser} formValues={formValues} handleInputChange={handleInputChange} />
              </Route>
              <Route path="/">
                <Dashboard deleteUser={deleteUser} users={users} isLoading={isLoading} />
              </Route>
            </Switch>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
