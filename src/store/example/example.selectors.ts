import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'src/app/rootStore';

const getState = (state: RootState) => state.example;

export const getListSelector = createSelector(getState, (state) => state.list);
