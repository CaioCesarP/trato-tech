import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const buscaSlice = createSlice({
  name: "carrinho",
  initialState,
  reducers: {
    mudarBusca: (_, { payload }) => payload,
    resetarBusca: () => initialState,
  },
});

export const { mudarBusca, resetarBusca } = buscaSlice.actions;

export default buscaSlice.reducer;
