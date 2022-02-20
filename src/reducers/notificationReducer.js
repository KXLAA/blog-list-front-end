/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "Notify Me Please",
  visible: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    createNotification(state, action) {
      state.message = action.payload;
      state.visible = true;
    },
    removeNotification(state, action) {
      state.visible = false;
    },
  },
});
export const { createNotification, removeNotification } =
  notificationSlice.actions;

export const setNotification = (content, timer) => {
  return (dispatch) => {
    dispatch(createNotification(content));
    setTimeout(() => {
      dispatch(removeNotification());
    }, timer);
  };
};
export default notificationSlice.reducer;
