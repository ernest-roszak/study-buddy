import { useReducer } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  console.log('state, action', state, action);
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.filed]: action.value,
      };
    case actionTypes.clearValues:
      return {
        ...action.initialState,
      };
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

export const useForm = (initialState) => {
  const [formValues, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      filed: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearForm = () => {
    dispatch({ type: actionTypes.clearValues, initialState });
  };
  const handleThrowError = (errorMessage) => {
    dispatch({ type: actionTypes.throwError, errorValue: errorMessage });
  };
  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.consentToggle });
  };

  return {
    formValues,
    handleInputChange,
    handleClearForm,
    handleThrowError,
    handleToggleConsent,
  };
};
