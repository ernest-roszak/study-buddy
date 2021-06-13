import React from 'react';
import { render, screen, fireEvent, waitFor } from 'test-utils';
import Root from './Root';

describe('Root component', () => {
  it('Renders the root component as unauthorized user', () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Displays error message when search phrase is matching', async () => {
    render(<Root />);
    screen.getByLabelText('login');
  });

  it('Displays error message when wrong credentials are passed', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'wrong' } });
    fireEvent.change(password, { target: { value: 'pass' } });

    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => screen.getByText(/Oops/));
  });

  it('Displays authenticated application', async () => {
    render(<Root />);
    const login = screen.getByLabelText('login');
    const password = screen.getByLabelText('password');

    fireEvent.change(login, { target: { value: 'teacher@studybuddy.com' } });
    fireEvent.change(password, { target: { value: 'test1234' } });

    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => screen.getByText(/Lonnie/));
  });
});
