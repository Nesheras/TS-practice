import { configureStore } from "@reduxjs/toolkit";
import { pizzaApi } from "../API/API";
// ...

export const store = configureStore({
  reducer: { [pizzaApi.reducerPath]: pizzaApi.reducer },

  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(pizzaApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
