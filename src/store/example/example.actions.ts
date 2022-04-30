import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchList = createAsyncThunk('example/fetch-list', async (data, thunkApi) => {
  try {
    // eslint-disable-next-line no-empty-pattern
  } catch (error) {
    console.error(error);
  }
});
