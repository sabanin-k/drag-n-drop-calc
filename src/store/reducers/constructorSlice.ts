import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const constructorSlice = createSlice({
    name: 'constructorSlice',
    initialState: {
        draggedComponent: 0,
        fieldArray: [] as number[]
    },
    reducers: {
        setDraggedComponent(state, action: PayloadAction<number>) {
            state.draggedComponent = action.payload
        },
        dropElementOnField(state) {
            const isElementInArray = state.fieldArray.includes(state.draggedComponent)
            if (!isElementInArray) {
                state.fieldArray = [
                    ...state.fieldArray,
                    state.draggedComponent
                ]
            }
        }
    }
})

export const constructorReducer = constructorSlice.reducer