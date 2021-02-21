import React from 'react';
import UserList from '../components/organisms/UsersList/UsersList';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Wrapper>
        <UserList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
