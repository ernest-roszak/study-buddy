import { useAuth } from 'hooks/useAuth';
import React from 'react';
import { Logo, StyledLink, Wrapper } from './Navigation.styles';

export const Navigation = () => {
  const auth = useAuth();
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink exact to="/group">
        Dashboard
      </StyledLink>
      <StyledLink as="a" onClick={auth.signOut}>
        Logout
      </StyledLink>
      {/* <StyledLink to="/add-user">Add user</StyledLink> */}
      {/* <StyledLink to="/">
        Settings
      </StyledLink>
      <StyledLink to="/">
        Logout
      </StyledLink> */}
    </Wrapper>
  );
};
