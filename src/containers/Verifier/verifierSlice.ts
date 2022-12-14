import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface VerifierState {
  value: string,
}

const initialState: VerifierState = {
  value: '',
}

export const verifierSlice = createSlice({
  name: 'verifier',
  initialState,
  reducers: {
    add: (state,action:PayloadAction<string>) => {
     const value = state.value + action.payload;
     console.log(value);
     return state
    },

  }
});

export const verifierReducer = verifierSlice.reducer;
export const {add} = verifierSlice.actions;