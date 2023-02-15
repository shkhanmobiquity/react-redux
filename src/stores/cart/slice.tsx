import { createSlice } from "@reduxjs/toolkit";

// State type
export interface CartState {
    items: any[]
}
// Initial state
const cartInitialState = { items: [] } as CartState;

// Slice
const cartSlice = createSlice({
    name: 'Cart State',
    initialState: cartInitialState,
    reducers: {
        add: (state, action) => {
            const item = action.payload;
            const oldStateItems = state.items.slice();
            const existsCartItemIndex = oldStateItems.findIndex(i => i.id === item.id);
            const existsCartItem = oldStateItems[existsCartItemIndex];
            let allItems;
            if (existsCartItem) {
                allItems = [...oldStateItems];
                allItems[existsCartItemIndex] = {
                    ...item,
                    quantity: existsCartItem.quantity + 1
                };
            } else {
                allItems = oldStateItems.concat({
                    ...item,
                    quantity: 1
                });
            }
            state.items = allItems;
        },
        remove: (state, action) => {
            const id = action.payload;
            state.items = state.items.filter(d => d.id !== id);
        },
        clear: (state) => {
            state.items = [];
        }
    }
});

// Exporting
export const cartActions = cartSlice.actions;
export default cartSlice;