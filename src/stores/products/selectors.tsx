import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { ProductsState } from "./slice";

// Module selectors
export const productsSelector = createDraftSafeSelector(
    (state: any) => state, (state: any) => state.products
)
export const allProductSelector = createDraftSafeSelector(
    productsSelector, (state: ProductsState) => state.listData
)
export const paginoatorSelector = createDraftSafeSelector(
    productsSelector, (state: ProductsState) => state.paginoator
)
