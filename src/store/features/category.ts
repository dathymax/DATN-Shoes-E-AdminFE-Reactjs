import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ICategory } from "../../types";

interface ProductState {
    categories: ICategory[];
}

const initialState: ProductState = {
    categories: [],
};

export const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        setAllCategory: (state, action: PayloadAction<ICategory[]>) => {
            state.categories = action.payload;
        },
    },
});

export default CategorySlice.reducer;
export const { setAllCategory } = CategorySlice.actions;
