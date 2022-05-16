import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const constructorSlice = createSlice({
    name: 'constructorSlice',
    initialState: {
        draggedComponent: '',
        hoveredComponentIndex: 10,
        fieldArray: [] as string[]
    },
    reducers: {
        setDraggedComponent(state, action: PayloadAction<string>) {
            state.draggedComponent = action.payload
            console.log('dragged ' + state.draggedComponent);
        },
        resetDraggedComponent(state) {
            state.draggedComponent = ''
        },
        setHoveredComponentIndex(state, action: PayloadAction<number>) {
            state.hoveredComponentIndex = action.payload
            console.log('hovered ' + state.hoveredComponentIndex);
        },
        resetHoveredComponent(state) {
            state.hoveredComponentIndex = 10
            console.log('drag reset');            
        },
        dropElementOnField(state) {
            // const isComponentInArray = state.fieldArray.includes(state.draggedComponent)
            state.fieldArray = state.fieldArray.filter(componentIndex => componentIndex !== state.draggedComponent)
            state.fieldArray.splice(state.hoveredComponentIndex, 0, state.draggedComponent)

            if (state.fieldArray.includes('display')) {
                state.fieldArray = [
                    'display',
                    ...state.fieldArray.filter(componentID => componentID !== 'display')
                ]
            }

            // reset state
            state.draggedComponent = ''
            state.hoveredComponentIndex = 10
        },
        removeElementFromField(state, action: PayloadAction<string>) {
            state.fieldArray = state.fieldArray.filter(elemID => elemID !== action.payload)
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