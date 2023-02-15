import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IState } from '../../core/interfaces/api.interface';

// Model
export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string
    category: string,
    thumbnail: string
    images: string[]
}

// Product state
export interface ProductsState extends IState<IProduct>{}
// Product initial state
export const productInitialState = { listData: [] } as ProductsState;
// Create feature module or Store Slice
const productSlice = createSlice({
    name: 'Products', // Unique module or slice name
    initialState: productInitialState, // initialState
    reducers: { // all reducers
        getProductRequestSend: (state: ProductsState, action: PayloadAction<any>) => {
            state.status = {
                ...state.status,
                getListStatus: 'pending'
            };
        },
        getProductRequestSuccess: (state: ProductsState, action: PayloadAction<any>) => {
            const { products, limit, total, page } = action.payload;
            state.status = {
                ...state.status,
                getListStatus: 'succeeded'
            };
            state.listData = products;
            state.paginoator = {
                ...state.paginoator,
                filteredTotal: 0,
                total: total,
                page: page,
                limit: limit
            }
        },
        getProductRequestFailed: (state: ProductsState, action: PayloadAction<any>) => {
            state.status = {
                ...state.status,
                getListStatus: 'failed'
            };
            state.listData = [];
            state.paginoator = { } as any;
        }
    },
});
// Actions
export const productActions = productSlice.actions;
// Store
export default productSlice;

