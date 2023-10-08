import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "./features/auth";
import { ProductSlice } from "./features/products";
import { FileSlice } from "./features/file";
import { CategorySlice } from "./features/category";

const rootReducer = combineReducers({
    auth: AuthSlice.reducer,
    products: ProductSlice.reducer,
    file: FileSlice.reducer,
    category: CategorySlice.reducer,
});

export default rootReducer;
