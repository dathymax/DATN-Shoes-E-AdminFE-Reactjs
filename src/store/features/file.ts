import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";
import { IImage } from "../../types";
import { RootState } from "../store";

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
        addFiles: (state, action: PayloadAction<IImage[]>) => {
            state.images = action.payload;
        },
        removeAllFile: (state) => {
            state.images = []
        },
        removeFileById: (state, action: PayloadAction<{ fileId?: string }>) => {
            state.images.filter(image => image._id !== action.payload.fileId);
        }
    },
});

export default FileSlice.reducer;
export const { addFile, removeAllFile, addFiles, removeFileById } = FileSlice.actions;