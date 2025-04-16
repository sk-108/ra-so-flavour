// src/redux/slices/FeedbackSlice.jsx
import { createSlice } from "@reduxjs/toolkit";

// Try to load feedback from localStorage
const loadFeedback = () => {
  try {
    const data = localStorage.getItem("feedback");
    return data ? JSON.parse(data) : {};
  } catch (err) {
    console.error("Failed to load feedback:", err);
    return {};
  }
};

const feedbackSlice = createSlice({
  name: "feedback",
  initialState: {
    feedbackData: loadFeedback(),
  },
  reducers: {
    addFeedback: (state, action) => {
      const { id, rating, comment } = action.payload;
      state.feedbackData[id] = { rating, comment };
    },
  },
});

export const { addFeedback } = feedbackSlice.actions;
export default feedbackSlice.reducer;
