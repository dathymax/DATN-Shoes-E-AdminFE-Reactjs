import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";

interface ProductState {
    items: IProduct[];
}

const initialState: ProductState = {
    items: [],
};

export const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        setAllProduct: (state, action: PayloadAction<IProduct[]>) => {
            state.items = action.payload;
        },
    },
});

export default ProductSlice.reducer;
export const { setAllProduct } = ProductSlice.actions;
