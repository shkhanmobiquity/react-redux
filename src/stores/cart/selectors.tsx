import { createDraftSafeSelector } from "@reduxjs/toolkit";
import { CartState } from "./slice";

// Module selectors
export const cartSelectors = createDraftSafeSelector(
    (state: any) => state, (state: any) => state.cart
)
export const cartItemsSelector = createDraftSafeSelector(
    cartSelectors, (state: CartState) => state.items
)