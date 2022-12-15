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
      return {...state, value: state.value + action.payload}
    },
    backspace: (state) => {},
    verify: (state) => {
      console.log(state.value)
    },
  }
});

export const verifierReducer = verifierSlice.reducer;
export const {add, backspace, verify} = verifierSlice.actions;