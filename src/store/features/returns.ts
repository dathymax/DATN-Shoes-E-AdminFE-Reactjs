import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IReturns } from "../../types";

interface ReturnsState {
    items: IReturns[];
}

const initialState: ReturnsState = {
    items: [],
};

export const ReturnsSlice = createSlice({
    name: "returns",
    initialState,
    reducers: {
        setAllReturns: (state, action: PayloadAction<IReturns[]>) => {
            state.items = action.payload;
        },
    },
});

export default ReturnsSlice.reducer;
export const { setAllReturns } = ReturnsSlice.actions;
