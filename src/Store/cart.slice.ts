import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loadState } from "./storage";
export const CART_PERSISTENT_STATE = "cartData";
export interface CartItem {
  id: number;
  count: number;
}
export interface CartState {
  items: CartItem[];
}
const initialState: CartState = loadState<CartState>(CART_PERSISTENT_STATE) ?? {
  items: [],
};
export const cartSlise = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clear: (state) => {
      state.items = [];
    },
    delete: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (existed) {
        state.items.map((i) => {
          if (i.id === action.payload) {
            if (i.count == 0) {
              return i.count;
            }
            i.count--;
          }
          return i;
        });
        return;
      }

      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    add: (state, action: PayloadAction<number>) => {
      const existed = state.items.find((i) => i.id === action.payload);
      if (!existed) {
        state.items.push({ id: action.payload, count: 1 });
        return;
      }
      state.items.map((i) => {
        if (i.id === action.payload) {
          i.count++;
        }
      });
    },
  },
});
export default cartSlise.reducer;
export const cartActions = cartSlise.actions;
