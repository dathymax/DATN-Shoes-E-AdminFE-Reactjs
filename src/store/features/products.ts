import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types";
import { RootState } from "../store";

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
            state.items = action.payload
        },
    },
});

export default ProductSlice.reducer;
export const { setAllProduct } = ProductSlice.actions;

const items = (state: RootState) => state.products.items;