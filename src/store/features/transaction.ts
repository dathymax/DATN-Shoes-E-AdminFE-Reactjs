import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITransaction } from "../../types";

interface TransactionState {
    items: ITransaction[];
}

const initialState: TransactionState = {
    items: [],
};

export const TransactionSlice = createSlice({
    name: "transaction",
    initialState,
    reducers: {
        setAllTransaction: (state, action: PayloadAction<ITransaction[]>) => {
            state.items = action.payload;
        },
    },
});

export default TransactionSlice.reducer;
export const { setAllTransaction } = TransactionSlice.actions;
