import { useReducer } from 'react';

// Initial value
const intialValue = { value: '', isTouched: false };

//Form reducer
const formReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.val, isTouched: state.isTouched };
  } else if (action.type === 'IS_TOUCHED') {
    return { value: state.value, isTouched: true };
  } else if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return intialValue;
};

function useForm(validateValue) {
  const [input, dispatchInput] = useReducer(formReducer, intialValue);

  // Validate input with the validateValue function passed in as an argument
  const isValueValid = validateValue(input.value);

  // Check if the input is invalid and has been touched
  const isInputInvalid = !isValueValid && input.isTouched;

  // Input change handler
  const handleInputChange = e => dispatchInput({ type: 'INPUT', val: e.target.value });

  // Input blur handler
  const handleInputBlur = () => dispatchInput({ type: 'IS_TOUCHED', val: true });

  // Reset input
  const reset = () => dispatchInput({ type: 'RESET' });

  return {
    input: input.value,
    isInputInvalid,
    handleInputChange,
    handleInputBlur,
    reset
  };
}

export default useForm;
