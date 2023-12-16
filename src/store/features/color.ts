import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IColor } from "../../types";

interface ColorState {
    colors: IColor[];
}

const initialState: ColorState = {
    colors: [],
};

export const ColorSlice = createSlice({
    name: "color",
    initialState,
    reducers: {
        setAllColor: (state, action: PayloadAction<IColor[]>) => {
            state.colors = action.payload;
        },
    },
});

export default ColorSlice.reducer;
export const { setAllColor } = ColorSlice.actions;
