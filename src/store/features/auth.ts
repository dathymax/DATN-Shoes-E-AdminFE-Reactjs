import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types";
import { RootState } from "../store";

interface IInitialState {
    userInfo: IUser,
    token: string
}

const initialState: IInitialState = {
    userInfo: {},
    token: ""
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserInfo: (state, action: PayloadAction<{ user: IUser, token: string }>) => {
            state.userInfo = action.payload.user;
            state.token = action.payload.token
        },
    },
});

export default AuthSlice.reducer;
export const { setUserInfo } = AuthSlice.actions;

const auth = (state: RootState) => state.auth;

export const userInfoQtySelector = createSelector(auth, (userInfo) => {
    return userInfo
});