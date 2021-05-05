import { render, screen, fireEvent, waitFor } from 'hooks/test-utils';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers';
import { SearchBar } from './SearchBar';

const server = setupServer(...handlers);

describe('Search Bar', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('Renders the component', () => {
    render(<SearchBar />);
    screen.getByText('Teacher');
    screen.getByPlaceholderText('Search');
  });

  it('Displays users when search phrase is matching', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' } });

    await screen.findByText(/Adam Ro/);
  });

  it('Hides the results when input is empty', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Ro/);

    fireEvent.change(input, { target: { value: '' } });
    await waitFor(() => {
      expect(screen.getByLabelText('results')).not.toBeVisible();
    });
  });

  it('Hides the results when button esc is pressed', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText('Search');
    fireEvent.change(input, { target: { value: 'ad' } });
    await screen.findByText(/Adam Ro/);

    fireEvent.keyDown(input, { key: 'Esc', code: 'Esc' });
    await waitFor(() => {
      expect(screen.getByLabelText('results')).not.toBeVisible();
    });
  });
});