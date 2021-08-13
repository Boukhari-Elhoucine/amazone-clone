import { createSlice } from "@reduxjs/toolkit";

export const BasketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
  },
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];
      if (index >= 0) {
        newBasket.splice(index, 1);
        state.items = newBasket;
      } else {
        return;
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = BasketSlice.actions;
export const selectItem = (state) => state.basket.items;
export default BasketSlice.reducer;
