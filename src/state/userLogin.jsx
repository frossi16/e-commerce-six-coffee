import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const sendLoginRequest = createAsyncThunk( "LOGIN",
  ({ email, password }) => {
    console.log(email.value);

    return axios
      .post("http://localhost:3030/user/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        const user = res.data;

        localStorage.setItem(
          "user",
          JSON.stringify({ id: user._id, name: user.name })
        );

        return user;
      });
  }
);

export const userLoged = createAsyncThunk("ISLOGED", (value) => {
  if (value) return value;
});



export const sendUserRegister = createAsyncThunk("USER_REGISTER",
({name,lastName,password,email})=>{
  axios.post('http://localhost:3030/user/register', ({ name: name.value, lastName: lastName.value, password: password.value, email: email.value }))
  .then((res) => res.data)
  .catch(error => console.log(error))


})

const userLoginReducer = createReducer(
  {},
  {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [userLoged.fulfilled]: (state, action) => action.payload,
  }
);

export default userLoginReducer;
