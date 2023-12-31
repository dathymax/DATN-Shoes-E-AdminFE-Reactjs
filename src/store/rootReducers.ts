import { combineReducers } from "@reduxjs/toolkit";
import { AuthSlice } from "./features/auth";
import { ProductSlice } from "./features/products";
import { FileSlice } from "./features/file";
import { CategorySlice } from "./features/category";
import { TransactionSlice } from "./features/transaction";
import { ReturnsSlice } from "./features/returns";
import { PromoCodeSlice } from "./features/promo-code";
import { LayoutSlice } from "./features/layout";
import { ColorSlice } from "./features/color";
import { SizeSlice } from "./features/size";

const rootReducer = combineReducers({
    auth: AuthSlice.reducer,
    products: ProductSlice.reducer,
    file: FileSlice.reducer,
    category: CategorySlice.reducer,
    transaction: TransactionSlice.reducer,
    returns: ReturnsSlice.reducer,
    promoCode: PromoCodeSlice.reducer,
    layout: LayoutSlice.reducer,
    color: ColorSlice.reducer,
    size: SizeSlice.reducer,
});

export default rootReducer;
