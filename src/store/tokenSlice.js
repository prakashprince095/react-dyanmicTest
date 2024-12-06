import { createSlice } from '@reduxjs/toolkit';

const tokenSlice = createSlice({
  name: 'token',
  initialState: { value: "" },
  reducers: {
    // Action to store the token
    fetchedTokenSuccess: (state, action) => {
      console.log("fetched token successful",action.payload);

      state.value = action.payload; // Save token from payload
    },
    // Action to handle failure
    fetchedTokenFail: (state) => {
      console.log("the token fetched fail");
      state.value = "failed";
    },
  },
});

// Exporting the actions correctly
export const { fetchedTokenSuccess, fetchedTokenFail } = tokenSlice.actions;

export default tokenSlice.reducer;
