import { RootState } from "../store";

export const getValue = (state: RootState) => state.displayReducer.value
export const getDropped = (state: RootState) => state.displayReducer.dropped