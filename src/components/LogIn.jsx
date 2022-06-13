import React from "react";
import axios from "axios";
import * as validations from "./validations";
import useInput from "../commons/useInput";
import Input from "../commons/input";

function NewUser() {
  const email = useInput("", validations.email);
  const password = useInput("", validations.password);

  const isDisabled = () => {
    return (
      email.value.length ||
      email.error ||
      password.value.length ||
      password.error
    );
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/", {
        email: email.value,
        password: password.value,
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div class="position relative">
        <h1 class="position-absolute start-50 translate-middle titleForm">
          Log In
        </h1>
        <div class="form">
          <form class="row g-3" onSubmit={handleSubmit}>
          
              <Input
                label={"Email"}
                validation={validations.email}
                placeholder={"adamsmith@email.com"}
                type={'text'}
              />
           
            
              <Input
                label={"Password"}
                validation={validations.password}
                errorMessage="Invalid password"
                placeholder={"password"}
                type={'password'}
              />
           
          
            <button
            disabled={isDisabled}
            type="submit"
            class="w-100 btn btn-primary btn-lg"
          >
            Log in
          </button>
          </form>
         
        </div>
      </div>
    </>
  );
}

export default NewUser;
