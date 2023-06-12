import Data from "@/utils/API/Base-API";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// List from API/Base-API.js
export const fetchDataMovie = createAsyncThunk(
  "movie/getMovie",
  async (query) => {
    try {
      const response = await axios.get(Data(query));
      return response.data.Search;
    } catch (error) {
      console.log("errorFetchingAPI", error);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    status: "idle",
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataMovie.pending, (state) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(fetchDataMovie.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchDataMovie.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default movieSlice.reducer;
