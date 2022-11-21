import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/rootStore';

const getState = (state: RootState) => state.example;

export const exampleListSelector = createSelector(getState, (state) => state.list);
export const isLoadingUsersListSelector = createSelector(
  getState,
  (state) => state.isLoadingUsersList,
);
