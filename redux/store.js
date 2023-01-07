import { configureStore } from "@reduxjs/toolkit";
import CryptoReducer from "./CyrptoSlice";

export const store = configureStore({
  reducer: {
    crypto: CryptoReducer,
  },
});
