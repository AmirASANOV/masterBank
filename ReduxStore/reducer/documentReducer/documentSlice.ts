import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { documentStateType, initialDocumentState } from './index';

export const documentSlice = createSlice({
  name: 'documentState',
  initialState: initialDocumentState,
  reducers: {
    setOpenedDocument(state, { payload }: PayloadAction<documentStateType>) {
      state.opened = payload.opened;
      state.pdfFile = payload.pdfFile;
    },
  },
});

export const { setOpenedDocument } = documentSlice.actions;

export const documentReducer = documentSlice.reducer;
