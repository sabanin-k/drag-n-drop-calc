import { RootState } from "../store";

export const getDragComponentID = (state: RootState) => state.constructorReducer.draggedComponent
export const getDropArray = (state: RootState) => state.constructorReducer.dropArray
export const getHoveredComponent = (state: RootState) => state.constructorReducer.hoveredComponent