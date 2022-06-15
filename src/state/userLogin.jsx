import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";

export const sendLoginRequest = createAsyncThunk( "LOGIN",
  ({ email, password }) => {
    console.log(email.value,password.value);

    return axios
      .post("http://localhost:3030/user/login", {
        email: email.value,
        password: password.value,
      })
      .then((res) => {
        const user = res.data;

        localStorage.setItem(
          "user",
          JSON.stringify({ _id: user._id, name: user.name,admin:user.admin })
        );

        return user;
      });
  }
);

export const userLoged = createAsyncThunk("ISLOGED", (value) => {
  if (value) return value;
});

const userLoginReducer = createReducer(
  {},
  {
    [sendLoginRequest.fulfilled]: (state, action) => action.payload,
    [userLoged.fulfilled]: (state, action) => action.payload,
  }
);

export default userLoginReducer;
