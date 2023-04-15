import { createSlice } from '@reduxjs/toolkit';

const couterSlice = createSlice({
  name: 'count',
  initialState: 0,
  reducers: {
    increment(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
    incrementByAmount(state, action) {
      return state + action.payload;
    },
  },
});

const { actions, reducer } = couterSlice;
export const { increment, decrease, incrementByAmount } = actions;
export default reducer;
