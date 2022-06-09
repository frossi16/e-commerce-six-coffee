import React, { useState } from "react";
import * as validations from "../components/validations";
import useInput from "./useInput";

function Input({label, validation, errorMessage, placeholder, type}) {

    const {error, ...data} = useInput('', validation, errorMessage)

  return (
    <label >
      <div class="d-flex justify-content-between">
      {label} 
      {error && <div class="error pull-right"> {errorMessage}</div>}
      </div>
      <input
        {...data}
        type={type}
        class="form-control form-control-lg"
        placeholder={placeholder}
        name={label}
        
      />
    </label>
  );
}

export default Input;
