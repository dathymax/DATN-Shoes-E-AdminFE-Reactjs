import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ISize } from "../../types";

interface SizeState {
    sizes: ISize[];
}

const initialState: SizeState = {
    sizes: [],
};

export const SizeSlice = createSlice({
    name: "size",
    initialState,
    reducers: {
        setAllSize: (state, action: PayloadAction<ISize[]>) => {
            state.sizes = action.payload;
        },
    },
});

export default SizeSlice.reducer;
export const { setAllSize } = SizeSlice.actions;
