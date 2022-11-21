import { createSlice } from '@reduxjs/toolkit';
import { fetchList } from './example.actions';
import { InitialStateProps } from './types';

const initialState: InitialStateProps = {
  list: [],
  isLoadingUsersList: false,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setExampleList: (state, action) => {
      state.list = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchList.pending, (state) => {
      state.isLoadingUsersList = true;
    });
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.isLoadingUsersList = false;
      state.list = action.payload;
    });
    builder.addCase(fetchList.rejected, (state) => {
      state.isLoadingUsersList = false;
    });
  },
});

export const { setExampleList } = exampleSlice.actions;

export default exampleSlice.reducer;
