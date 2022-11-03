import { useState } from 'react';

function useInput(validationFunction) {
  const [enteredValue, setEnteredValue] = useState('');
  const [enteredValueTouched, setEnteredValueTouched] = useState(false);

  const enteredValueIsValid = validationFunction(enteredValue);
  const inputIsInvalid = !enteredValueIsValid && enteredValueTouched;

  const inputChangeHandler = event => setEnteredValue(event.target.value);

  const inputBlurHandler = () => setEnteredValueTouched(true);

  const reset = () => {
    setEnteredValue('');
    setEnteredValueTouched(false);
  };

  return {
    enteredValue,
    enteredValueIsValid,
    inputIsInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
}

export default useInput;
