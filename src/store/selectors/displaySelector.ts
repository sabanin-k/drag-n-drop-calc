import { RootState } from "../store";

export const getValue = (state: RootState) => state.runtimeReducer.value
export const getDropped = (state: RootState) => state.runtimeReducer.dropped