import { configureStore } from '@reduxjs/toolkit';
import productSlice from './products/slice';
import cartSlice from './cart/slice';
import demoSlice from './demo/slice';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        cart: cartSlice.reducer,
        demo: demoSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
});

export default store;