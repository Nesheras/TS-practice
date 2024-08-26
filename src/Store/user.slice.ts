import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadState } from "./storage";
import axios from "axios";
import { LoginResponse } from "../Interfaces/auth.interface";
import { BASE_URL } from "../API/API";
import { Profile } from "../Interfaces/user.interface";
import { RootState } from "./store";
export interface UsersState {
  jwt: string | null;
  loginState?: string;
  profile?: Profile;
}
export interface UserPersistentState {
  jwt: string | null;
}
export const JWT_PERSISTENT_STATE = "userData";
const initialState: UsersState = {
  jwt: loadState<UserPersistentState>(JWT_PERSISTENT_STATE)?.jwt ?? null,
  loginState: undefined,
};
export const login = createAsyncThunk(
  "user/login",
  async (params: { email: string; password: string }) => {
    const { data } = await axios.post<LoginResponse>(
      `${BASE_URL}/pizza-api-demo/auth/login`,
      {
        email: params.email,
        password: params.password,
      }
    );
    return data;
  }
);
export const getUserInfo = createAsyncThunk<
  Profile,
  void,
  { state: RootState }
>("user/getInfo", async (_, thunkApi) => {
  const jwt = thunkApi.getState().user.jwt;
  const { data } = await axios.get<Profile>(
    `${BASE_URL}/pizza-api-demo/user/profile`,
    {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    }
  );
  return data;
});
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.jwt = null;
    },
    clearLoginError: (state) => {
      state.loginState = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.jwt = action.payload.access_token;
    }),
      builder.addCase(login.rejected, (state, action) => {
        state.loginState = action.error.message;
      });
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      state.profile = action.payload;
    });
  },
});
export default userSlice.reducer;
export const userActions = userSlice.actions;
