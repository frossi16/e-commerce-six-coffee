import React, { useState } from "react";
import axios from "axios";
import * as validations from "./validations";
import useInput from "../commons/useInput";
import Input from "../commons/input";

function NewUser() {
  const name = useInput("", validations.username);
  const lastName = useInput("", validations.username);
  const email = useInput("", validations.email);
  const password = useInput("", validations.password);

  const isDisabled = () => {
    return (
      !name.value.length ||
      name.error ||
      lastName.value.length ||
      lastName.error ||
      email.value.length ||
      email.error ||
      password.value.length ||
      password.error
    );
  };

  const adminOnClick = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3030/", {
        name: name.value,
        lastName: lastName.value,
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
          Please register
        </h1>
        <div class="form">
          <form class="row g-2" onSubmit={handleSubmit}>
            <div class="col-md-6">
              <Input
                label={"Name"}
                validation={validations.username}
                errorMessage="Invalid name"
                placeholder={"Adam"}
                type={'text'}
              />
            </div>
            <div class="col-md-6">
              <Input
                label={"Last Name"}
                validation={validations.username}
                errorMessage="Invalid last name"
                placeholder={"Smith"}
                type={'text'}
              />
            </div>
            <div class="col-12">
              <Input
                label={"Email"}
                validation={validations.email}
                errorMessage="Invalid email"
                placeholder={"adamsmith@email.com"}
                type={'text'}
              />
            </div>
            <div class="col-12">
              <Input
                label={"Password"}
                validation={validations.password}
                errorMessage="Invalid password"
                type={'password'}
              />
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  onClick={adminOnClick} //-----------------------------------------------
                  class="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label class="form-check-label" for="gridCheck">
                  Check if this user is Admin
                </label>
              </div>
            </div>
            <div class="col-12"></div>
          </form>
          <button
            disabled={isDisabled}
            type="submit"
            class="w-100 btn btn-primary btn-lg"
          >
            Sign in
          </button>
        </div>
      </div>
    </>
  );
}

export default NewUser;
