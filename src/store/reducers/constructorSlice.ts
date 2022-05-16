import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const constructorSlice = createSlice({
    name: 'constructorSlice',
    initialState: {
        draggedComponent: '',
        hoveredComponent: '',
        dropArray: [] as string[]
    },
    reducers: {
        setDraggedComponent(state, action: PayloadAction<string>) {
            state.draggedComponent = action.payload
        },
        resetDraggedComponent(state) {
            state.draggedComponent = ''
        },
        setHoveredComponentIndex(state, action: PayloadAction<string>) {
            state.hoveredComponent = action.payload
        },
        resetHoveredComponent(state) {
            state.hoveredComponent = ''
        },
        dropElementOnField(state) {
            const draggedComponentIndex = state.dropArray.findIndex(component => component === state.draggedComponent)          

            state.dropArray = state.dropArray.filter(componentIndex => componentIndex !== state.draggedComponent)
            
            let hoveredComponentIndex = state.dropArray.findIndex(component => component === state.hoveredComponent)
            if (hoveredComponentIndex === -1) hoveredComponentIndex = state.dropArray.length + 1
            // component wasn't in dropArray; needs >3 to push component to the bottom

            if (draggedComponentIndex > hoveredComponentIndex || draggedComponentIndex === -1) {
                // drag from bottom to top or first drop
                state.dropArray.splice(hoveredComponentIndex, 0, state.draggedComponent)
            } else {
                // drag from top to bottom
                state.dropArray.splice(hoveredComponentIndex + 1, 0, state.draggedComponent)
            }

            if (state.dropArray.includes('display')) {
                state.dropArray = [
                    'display',
                    ...state.dropArray.filter(componentID => componentID !== 'display')
                ]
            }

            state.draggedComponent = ''
            state.hoveredComponent = ''
        },
        removeElementFromField(state, action: PayloadAction<string>) {
            state.dropArray = state.dropArray.filter(elemID => elemID !== action.payload)
        }
    }
})

export const constructorReducer = constructorSlice.reducer
export const {
    setDraggedComponent,
    resetDraggedComponent,
    setHoveredComponentIndex,
    resetHoveredComponent,
    dropElementOnField,
    removeElementFromField,
} = constructorSlice.actions