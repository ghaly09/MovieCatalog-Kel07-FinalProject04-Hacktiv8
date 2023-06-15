import baseAPI from "@/services/API/Base-API";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// List from API/Base-API.js
export const fetchDataSearch = createAsyncThunk(
  "search/getSearch",
  async (query) => {
    try {
      const response = await axios.request(baseAPI(query));
      return response.data;
    } catch (error) {
      console.log("errorFetchingAPI", error);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    status: "idle",
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataSearch.pending, (state) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(fetchDataSearch.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchDataSearch.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default searchSlice.reducer;
