import { RootState } from "../store";

export const getDragComponentID = (state: RootState) => state.constructorReducer.draggedComponent
export const getFieldArray = (state: RootState) => state.constructorReducer.fieldArray
export const getHoveredComponentIndex = (state: RootState) => state.constructorReducer.hoveredComponentIndex