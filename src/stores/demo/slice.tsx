import { createSlice } from "@reduxjs/toolkit";


// State type
export interface CartState {
    items: any[]
}
// Initial state
const cartInitialState = { items: [] } as CartState;


const demoSlice = createSlice({
    name: 'Demo Slice',
    initialState: cartInitialState,
    reducers: {
        addToCart: (state, action) => {
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

export const demoActions =  demoSlice.actions;

export default demoSlice;