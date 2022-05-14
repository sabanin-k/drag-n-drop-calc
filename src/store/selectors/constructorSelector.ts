import { RootState } from "../store";

export const getComponentID = (state: RootState) => state.constructorReducer.draggedComponent
export const getFieldArray = (state: RootState) => state.constructorReducer.fieldArray