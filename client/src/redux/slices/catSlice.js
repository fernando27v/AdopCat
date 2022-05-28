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
export const getBreeds = createAsyncThunk("cats/getBreeds", async (thunkAPI) => {
  try {
    const response = await axios.get("http://localhost:3002/api/breeds");
    return response.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const catSlice = createSlice({
  name: "catSlice",
  initialState: {
    cats: [],
    breeds:[],
    isLoading: false,
    rejectedCats: {},
     rejectedBreeds: {},
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
    builder.addCase(getBreeds.fulfilled, (state, action) => {
      state.breeds = action.payload.message;
      state.isLoading = false;
    });
    builder.addCase(getBreeds.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getBreeds.rejected, (state, action) => {
      state.rejectedBreeds = action.payload.message;
      state.isLoading = false;
    });

  },
});

export default catSlice.reducer;
