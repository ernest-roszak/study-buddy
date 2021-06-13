import React from 'react';

import { Switch, Route, Redirect } from 'react-router-dom';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Wrapper } from './Root.styles';
// import AddUser from 'views/AddUser';
import Dashboard from 'views/Dashboard';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { useForm } from 'react-hook-form';
import { useAuth } from 'hooks/useAuth';
import useError from 'hooks/useError';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';

const AuthenticatedApp = ({ children }) => {
  return (
    <MainTemplate>
      <Wrapper>
        <Switch>
          <Route exact path="/">
            <Redirect to="/group" />
          </Route>
          {/* <Route path="/add-user">
                <AddUser />
              </Route> */}
          <Route path="/group/:id?">
            <Dashboard />
          </Route>
        </Switch>
      </Wrapper>
    </MainTemplate>
  );
};

const UnAuthenticatedApp = () => {
  const auth = useAuth();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <form
      onSubmit={handleSubmit(auth.signIn)}
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}
    >
      <FormField label="login" name="login" id="login" {...register('login')} />
      {errors.login && <span>Login is required</span>}
      <FormField label="password" name="password" id="password" {...register('password')} />
      {errors.login && <span>Password is required</span>}
      <Button type="submit">Sign In</Button>
    </form>
  );
};

const Root = () => {
  const auth = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage /> : null}
      {auth.user ? <AuthenticatedApp /> : <UnAuthenticatedApp />}
    </>
  );
};

export default Root;
