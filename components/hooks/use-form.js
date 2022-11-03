import { useReducer } from 'react';

const intialValue = { value: '', isTouched: false };

const formReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.val, isTouched: state.isTouched };
  } else if (action.type === 'IS_TOUCHED') {
    return { value: state.value, isTouched: true };
  }
  return intialValue;
};

function useForm(validateValue) {
  const [input, dispatchInput] = useReducer(formReducer, intialValue);
  // const [input, setInput] = useState('');
  // const [isTouched, setIsTouched] = useState(false);

  const isValueValid = validateValue(input.value);
  const isInputInvalid = !isValueValid && input.isTouched;

  const handleInputChange = e => dispatchInput({ type: 'INPUT', val: e.target.value });

  const handleInputBlur = e => dispatchInput({ type: 'IS_TOUCHED', val: true });

  // const handleInputChange = e => setInput(e.target.value);
  // const handleInputBlur = e => setIsTouched(true);

  const reset = () => {
    dispatchInput({ type: 'RESET' });
    // setInput('');
    // setIsTouched(false);
  };

  return {
    input: input.value,
    isInputInvalid,
    handleInputChange,
    handleInputBlur,
    reset
  };
}

export default useForm;
