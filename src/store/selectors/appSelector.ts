import { RootState } from "../store";

export const getInitialization = (state: RootState) => state.appReducer.isInitialized
export const getToggle = (state: RootState) => state.appReducer.toggle