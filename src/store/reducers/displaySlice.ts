/* eslint-disable no-eval */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
    name: 'displaySlice',
    initialState: {
        value: '',
        dropped: false
    },
    reducers: {
        setValue(state, action: PayloadAction<string>) {
            state.value = state.value + action.payload
        },
        setDropped(state) {
            state.dropped = true
        },
        getEquals(state) {
            try {
                state.value = String(eval(state.value)).length > 3 &&
                String(eval(state.value)).includes(".")
                ? String(eval(state.value).toFixed(4))
                : String(eval(state.value))
                if (state.value === 'Infinity') {
                    state.value = 'Error'
                }                
            } catch (error) {
                alert(error)
            }
        }
    }
})

export const displayReducer = displaySlice.reducer