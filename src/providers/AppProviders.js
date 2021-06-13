import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';
import { AuthProvider } from 'hooks/useAuth';
import { ErrorProvider } from 'hooks/useError';
import { BrowserRouter as Router } from 'react-router-dom';

const AppProviders = ({ children }) => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ErrorProvider>
          <AuthProvider>
            <GlobalStyle />
            {children}
          </AuthProvider>
        </ErrorProvider>
      </ThemeProvider>
    </Router>
  );
};

export default AppProviders;
