import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notification',
  initialState: {
    data: [], // Initial state is an empty array to hold notification data
  },
  reducers: {
    addNotificationData: (state, action) => {
      // Add notification data to the state
      state.data.push(action.payload);
    },
    // Other reducers if needed
  },
});

export const { addNotificationData } = notificationSlice.actions;
export default notificationSlice.reducer;

