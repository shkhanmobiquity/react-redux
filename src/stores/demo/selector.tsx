import { createDraftSafeSelector } from "@reduxjs/toolkit";


// Module selectors
export const demoSelectors = createDraftSafeSelector(
    (state: any) => state, (state: any) => state.demo
)

export const itemSelector = createDraftSafeSelector(
    demoSelectors, (state: any) => state.items
)