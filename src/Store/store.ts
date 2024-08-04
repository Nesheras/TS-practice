import { configureStore } from "@reduxjs/toolkit";
import { pizzaApi } from "../API/API";
import userSlice, { JWT_PERSISTENT_STATE } from "./user.slice";
import { saveState } from "./storage";
// ...

export const store = configureStore({
  reducer: { [pizzaApi.reducerPath]: pizzaApi.reducer, user: userSlice },

  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(pizzaApi.middleware),
});
store.subscribe(() => {
  saveState({ jwt: store.getState().user.jwt }, JWT_PERSISTENT_STATE);
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
