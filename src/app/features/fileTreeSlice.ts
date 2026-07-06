import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { IFile, IProjectContent } from "../../interface";

export interface IClickedFile {
  activeTabId: string | null;
  fileName: string;
  content: string | IProjectContent | undefined;
}

interface IInitialState {
  openFiles: IFile[];
  clickedFile: IClickedFile;
}

const initialState: IInitialState = {
  openFiles: [],
  clickedFile: {
    activeTabId: null,
    fileName: "",
    content: "",
  },
};

const fileTreeSlice = createSlice({
  name: "fileTree",
  initialState,
  reducers: {
    setOpenedFiles: (state, action: PayloadAction<IFile[]>) => {
      state.openFiles = action.payload;
    },
    setClickedFiles: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },
    setActiveTabIdAction: (state, action: PayloadAction<IClickedFile>) => {
      state.clickedFile = action.payload;
    },

    clearClickedFile: (state) => {
      state.clickedFile = {
        activeTabId: null,
        fileName: "",
        content: "",
      };
    },
  },
});

export const { setOpenedFiles, setClickedFiles, setActiveTabIdAction , clearClickedFile } =
  fileTreeSlice.actions;

export default fileTreeSlice.reducer;
