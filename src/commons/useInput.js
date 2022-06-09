import { useState } from "react";


function useInput(initialState, validation) {
    const [value, setValue] = useState(initialState);
    const [error, setError] = useState(false);
    const onChange = (e) => {
      setValue(e.target.value);
    };
  
    const onBlur = () => {
      setError(!validation(value));
    };
  
    const onFocus = () => {
      setError(false);
    };
  
    return { value, onChange, onBlur, onFocus, error };
  }

  export default useInput