import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "./features/auth";
import { ProductSlice } from "./features/products";
import { FileSlice } from "./features/file";
import { CategorySlice } from "./features/category";
import { TransactionSlice } from "./features/transaction";
import { ReturnsSlice } from "./features/returns";

const rootReducer = combineReducers({
    auth: AuthSlice.reducer,
    products: ProductSlice.reducer,
    file: FileSlice.reducer,
    category: CategorySlice.reducer,
    transaction: TransactionSlice.reducer,
    returns: ReturnsSlice.reducer,
});

export default rootReducer;
