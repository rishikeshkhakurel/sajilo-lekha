import { createSlice } from "@reduxjs/toolkit";

const initState = {
  status: "ideal",
  data: [],
  error: false,
};

const setData = (_, action) => ({
  status: "data",
  data: action.payload,
  error: false,
});

const customerLedgerSlice = createSlice({
  name: "customerSlice",
  initialState: initState,
  reducers: {
    setData,
  },
});

export default customerLedgerSlice;
