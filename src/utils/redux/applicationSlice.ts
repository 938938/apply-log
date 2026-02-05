import { Application } from '@/model/type';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: Application[] = [];

export const applicationSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(_state, action: PayloadAction<Application[]>) {
      return action.payload;
    },
    addApplication(state, action: PayloadAction<Application>) {
      state.push(action.payload);
    },
    updateApplication(state, action: PayloadAction<Application>) {
      const idx = state.findIndex((app) => app.id === action.payload.id);
      if (idx !== -1) {
        state[idx] = action.payload;
      }
    },
    deleteApplication(state, action: PayloadAction<string>) {
      return state.filter((app) => app.id !== action.payload);
    },
  },
});

export const { setData, addApplication, updateApplication, deleteApplication } =
  applicationSlice.actions;
export default applicationSlice.reducer;
