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
            console.log('dragged ' + state.draggedComponent);
        },
        resetDraggedComponent(state) {
            state.draggedComponent = ''
            // console.log('dragged reset' + state.draggedComponent);
        },
        setHoveredComponentIndex(state, action: PayloadAction<string>) {
            state.hoveredComponent = action.payload
            console.log('hovered ' + state.hoveredComponent);
        },
        resetHoveredComponent(state) {
            state.hoveredComponent = ''
            // console.log('drag reset');        
        },
        dropElementOnField(state) {
            const draggedComponentIndex = state.dropArray.findIndex(component => component === state.draggedComponent)
            console.log('draggedComponentIndex ' + draggedComponentIndex);
            

            state.dropArray = state.dropArray.filter(componentIndex => componentIndex !== state.draggedComponent)
            
            let hoveredComponentIndex = state.dropArray.findIndex(component => component === state.hoveredComponent)
            if (hoveredComponentIndex === -1) hoveredComponentIndex = 10 // component wasn't in dropArray; needs 10 for push component 

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

            // reset state
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