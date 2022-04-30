import { createSlice } from '@reduxjs/toolkit';
import { InitialStateProps } from './types';

const initialState: InitialStateProps = {
  list: [],
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {},
  extraReducers: {},
});

// export const {} = exampleSlice.actions;

export default exampleSlice.reducer;
