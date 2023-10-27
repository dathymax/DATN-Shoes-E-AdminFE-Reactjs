import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPromoCode } from "../../types";

interface PromoCodeState {
    items: IPromoCode[];
}

const initialState: PromoCodeState = {
    items: [],
};

export const PromoCodeSlice = createSlice({
    name: "promoCode",
    initialState,
    reducers: {
        setAllPromoCode: (state, action: PayloadAction<IPromoCode[]>) => {
            state.items = action.payload;
        },
    },
});

export default PromoCodeSlice.reducer;
export const { setAllPromoCode } = PromoCodeSlice.actions;
