import {configureStore} from "@reduxjs/toolkit";
import {verifierReducer} from "../containers/Verifier/verifierSlice";

export const store  = configureStore({
  reducer: {
    verifier: verifierReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;