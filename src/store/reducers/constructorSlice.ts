import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const constructorSlice = createSlice({
    name: 'constructorSlice',
    initialState: {
        draggedComponent: 0
    },
    reducers: {
        setDraggedComponent(state, action: PayloadAction<number>) {
            state.draggedComponent = action.payload
        }
    }
})

export const constructorReducer = constructorSlice.reducer