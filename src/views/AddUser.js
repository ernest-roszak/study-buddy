import React, { useContext, useReducer } from 'react';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { Title } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProviders';

const initialState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};
// Reducer Simple example
// const reducer = (state, action) => {
//   console.log('state, action', state, action);
//   switch (action.type) {
//     case 'ADD':
//       return state + 1;
//     case 'SUBTRACT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

const reducer = (state, action) => {
  console.log('state, action', state, action);
  switch (action.type) {
    case 'INPUT CHANGE':
      return {
        ...state,
        [action.filed]: action.value,
      };
    case 'CLEAR VALUES':
      return initialState;
    case 'CONSENT TOGGLE':
      return {
        ...state,
        consent: !state.consent,
      };
    case 'THROW ERROR':
      return {
        error: action.errorValue,
      };
    default:
      return state;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialState);
  const { handleAddUser } = useContext(UsersContext);
  // const [value, dispatch] = useReducer(reducer, 0); ===> reducer usage

  const handleInputChange = (e) => {
    dispatch({
      type: 'INPUT CHANGE',
      filed: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      dispatch({ type: 'CLEAR VALUES' });
    } else {
      dispatch({ type: 'THROW ERROR', errorValue: 'You need consent checkbox' });
    }
  };
  return (
    // <UsersContext.Consumer>
    //   {({ handleAddUser }) => (
    <ViewWrapper as="form" onSubmit={handleSubmit}>
      <Title>Add new student</Title>
      {/* reducer simple example */}
      {/* <Title>{value}</Title>
      <Button onClick={() => dispatch({ type: 'ADD' })}> Add ME</Button>
      <Button onClick={() => dispatch({ type: 'SUBTRACT' })}> Subtract ME</Button> */}
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField
        label="Consent"
        id="consent"
        name="consent"
        type="checkbox"
        value={formValues.consent}
        onChange={() => dispatch({ type: 'CONSENT TOGGLE' })}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
    //   )}
    // </UsersContext.Consumer>
  );
};

export default AddUser;
