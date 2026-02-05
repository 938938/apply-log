import { Application } from '@/model/type';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { saveData } from '../actions/storages';

const initialState: Application[] = [];

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setData(_state, action: PayloadAction<Application[]>) {
      return action.payload;
    },
    addApplication(state, action: PayloadAction<Application>) {
      state.push(action.payload);
      saveData(state);
    },
    updateApplication(state, action: PayloadAction<Application>) {
      const idx = state.findIndex((app) => app.id === action.payload.id);
      if (idx !== -1) {
        state[idx] = action.payload;
      }
      saveData(state);
    },
    deleteApplication(state, action: PayloadAction<string>) {
      const idx = state.findIndex((app) => app.id === action.payload);
      if (idx !== -1) {
        state.splice(idx, 1);
      }
      saveData(state);
    },
  },
});

export const { setData, addApplication, updateApplication, deleteApplication } =
  applicationSlice.actions;
export default applicationSlice.reducer;
