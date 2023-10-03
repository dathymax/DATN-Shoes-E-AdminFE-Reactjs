import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IImage } from "../../types";

interface FileState {
    images: IImage[];
}

const initialState: FileState = {
    images: [],
};

export const FileSlice = createSlice({
    name: "file",
    initialState,
    reducers: {
        addFile: (state, action: PayloadAction<IImage>) => {
            state.images.push(action.payload);
        },
        removeAllFile: (state) => {
            state.images = []
        },
    },
});

export default FileSlice.reducer;
export const { addFile, removeAllFile } = FileSlice.actions;