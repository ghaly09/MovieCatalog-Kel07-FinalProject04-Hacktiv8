import baseAPI from "@/services/API/Base-API";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// List from API/Base-API.js
export const fetchDataDetail = createAsyncThunk(
  "detail/getDetail",
  async (query) => {
    try {
      const response = await axios.request(baseAPI(query));
      return response.data;
    } catch (error) {
      console.log("errorFetchingDetailAPI", error);
    }
  }
);

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    status: "idle",
    loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDataDetail.pending, (state) => {
      state.status = "pending";
      state.loading = true;
    });
    builder.addCase(fetchDataDetail.fulfilled, (state, action) => {
      return {
        ...state,
        status: "success",
        loading: false,
        data: action.payload,
      };
    });
    builder.addCase(fetchDataDetail.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

export default detailSlice.reducer;
