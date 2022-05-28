import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const logIn = createAsyncThunk("user/logIn", async (user, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3002/api/user/login",
        user
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  });

  const userSlice = createSlice({
    name: "userSlice",
    initialState: {
      loggedUser: {},
      isLoading: false,
      rejectedUser: {},
    },
  
    reducers: {
      logOut: (state) => {
        state.loggedUser = {};
      },
    },
    extraReducers: (builder) => {
      builder.addCase(logIn.fulfilled, (state, action) => {
        state.loggedUser = action.payload.message;
        state.isLoading = false;
      });
      builder.addCase(logIn.pending, (state, action) => {
        state.isLoading = true;
      });
      builder.addCase(logIn.rejected, (state, action) => {
        state.rejectedUser = action.payload.message;
        state.isLoading = false;
      });
    },
  });
  
  export const { logOut } = userSlice.actions;
  export default userSlice.reducer;
  