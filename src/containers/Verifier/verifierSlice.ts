import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface VerifierState {
  value: string,
}

const initialState: VerifierState = {
  value: '',
}

const correctPass = '2835';

export const verifierSlice = createSlice({
  name: 'verifier',
  initialState,
  reducers: {
    add: (state,action:PayloadAction<string>) => {
      if(state.value.length >= 4) {
        alert("The length of the password shouldn't be longer than 4 symbols")
        return {...state, value: state.value}
      }
      return {...state, value: state.value + action.payload}
    },
    backspace: (state) => {
      const max = state.value.length - 1;
      return {...state, value: state.value.slice(0, max)}
    },
    verify: (state) => {
      if(state.value === correctPass) {
        return {...state, value: 'Access granted'}
      }else{
        return {...state, value: 'Access denied'}
      }
    },
  }
});

export const verifierReducer = verifierSlice.reducer;
export const {add, backspace, verify} = verifierSlice.actions;