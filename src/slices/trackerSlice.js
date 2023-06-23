import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
};

const trackerSlice = createSlice({
  name: "expenses",
  initialState: initialState,
  reducers: {
    addTracker: (state, action) => {
      state.expenses = [...state.expenses, action.payload];
    },
    editTracker: (state, action) => {
      state.expenses = state.expenses.map((expense) => {
        if (expense.id === action.payload.id) {
          return action.payload.newExpense;
        }
        return expense;
      });
    },
    deleteTracker: (state, action) => {
      state.expenses = state.expenses.filter(
        (expense) => expense.id !== action.payload
      );
    },
  },
});

export const { addTracker, editTracker, deleteTracker } = trackerSlice.actions;

export default trackerSlice.reducer;
