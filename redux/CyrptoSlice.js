import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cryptoList: [],
  isLoading: false,
  isError: false,
  page: 1,
};

export const getCryptoList = createAsyncThunk("/", async (page) => {
  const response = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=${page}&sparkline=false`
  );
  return { data: response.data, page };
});

export const CryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCryptoList.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(getCryptoList.fulfilled, (state, action) => {
      state.cryptoList = action.payload.data;
      state.page = action.payload.page;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(getCryptoList.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default CryptoSlice.reducer;
