import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
    openDrawer?: boolean;
}

const initialState: LayoutState = {
    openDrawer: false,
};

export const LayoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        setOpenDrawer: (state) => {
            state.openDrawer = true;
        },
        setCloseDrawer: (state) => {
            state.openDrawer = false;
        },
    },
});

export default LayoutSlice.reducer;
export const { setOpenDrawer, setCloseDrawer } = LayoutSlice.actions;
