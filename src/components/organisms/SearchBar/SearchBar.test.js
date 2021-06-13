import { render, screen, fireEvent, waitFor } from 'hooks/test-utils';
import { SearchBar } from './SearchBar';

describe('Search Bar', () => {
  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'Low' } });

    await screen.findByText(/Lowell/);
  });

  // it('Hides the results when input is empty', async () => {
  //   render(<SearchBar />);
  //   const input = screen.getByPlaceholderText('Search');
  //   fireEvent.change(input, { target: { value: 'ad' } });
  //   await screen.findByText(/Adam Ro/);

  //   fireEvent.change(input, { target: { value: '' } });
  //   await waitFor(() => {
  //     expect(screen.getByLabelText('results')).not.toBeVisible();
  //   });
  // });

  // it('Hides the results when button esc is pressed', async () => {
  //   render(<SearchBar />);
  //   const input = screen.getByPlaceholderText('Search');
  //   fireEvent.change(input, { target: { value: 'ad' } });
  //   await screen.findByText(/Adam Ro/);

  //   fireEvent.keyDown(input, { key: 'Esc', code: 'Esc' });
  //   await waitFor(() => {
  //     expect(screen.getByLabelText('results')).not.toBeVisible();
  //   });
  // });
});
