import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getCats = createAsyncThunk("cats/getCats", async (thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:3002/api/cats");
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const catSlice = createSlice({
  name: "catSlice",
  initialState: {
    cats: [],
    isLoading: false,
    rejectedCats: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCats.fulfilled, (state, action) => {
      state.cats = action.payload.message;
      state.isLoading = false;
    });
    builder.addCase(getCats.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getCats.rejected, (state, action) => {
      state.rejectedCats = action.payload.message;
      state.isLoading = false;
    });
  },
});

export default catSlice.reducer;
