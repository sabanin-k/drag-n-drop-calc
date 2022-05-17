import { RootState } from "../store";

export const getX = (state: RootState) => state.runtimeReducer.x
export const getY = (state: RootState) => state.runtimeReducer.y
export const getOperator = (state: RootState) => state.runtimeReducer.operator
export const getValue = (state: RootState) => state.runtimeReducer.value
export const getDropped = (state: RootState) => state.runtimeReducer.dropped