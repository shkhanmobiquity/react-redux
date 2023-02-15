import { createStore } from "@reduxjs/toolkit";

const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART';

// ACTION
export const addTodo = (item: any) => ({
    type: ADD_TO_CART,
    payload: { item }
})

export const removeFromCart = (id: string) => ({
    type: REMOVE_ITEM_FROM_CART,
    payload: { id }
})

export const cartReducer = (state = [], action: any) => {
    switch (action.type) {
      case ADD_TO_CART:
        return state.concat(action.payload.item);
      case REMOVE_ITEM_FROM_CART:
        return state.filter((item: any) => item.id !== action.payload.ix);
      default:
        return state
    }
}

const store = createStore(cartReducer);
export default store;