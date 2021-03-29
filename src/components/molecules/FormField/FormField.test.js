import React, { useState } from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Form field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="Name" id="name" name="name" />);
  });
});

// const InputWithButton = () => {
//   const [inputValue, setInputValue] = useState('');
//   const handleOnChange = (e) => setInputValue(e.target.value);

//   return (
//     <>
//       <input value={inputValue} onChange={handleOnChange} name="Name" id="name" placeholder="Enter your name" />
//       <button disabled={!inputValue}>Submit</button>
//     </>
//   );
// };

// describe('test for InputWithButton', () => {
//   it('Renders the components', () => {
//     render(<InputWithButton />);
//     screen.getByText('Submit');
//   });
//   it('Properly handles values changes', () => {
//     render(<InputWithButton />);
//     const input = screen.getByPlaceholderText('Enter your name');
//     const button = screen.getByText('Submit');
//     expect(button).toBeDisabled();
//     fireEvent.change(input, { target: { value: 'Ernest' } });
//     expect(input).toHaveValue('Ernest');
//     expect(button).not.toBeDisabled();
//   });
// });
