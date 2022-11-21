import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchList = createAsyncThunk('example/fetch-list', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => json);

    console.log('response', response);

    return response;
  } catch (error) {
    console.error(error);
  }
});
