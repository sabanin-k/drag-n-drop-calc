import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const displaySlice = createSlice({
    name: 'displaySlice',
    initialState: {
        value: ''
    },
    reducers: {
        setValue(state, action: PayloadAction<string>) {
            state.value = state.value + action.payload
        },
        getEquals(state) {
            state.value = String(eval(state.value)).length > 3 &&
            String(eval(state.value)).includes(".")
            ? String(eval(state.value).toFixed(4))
            : String(eval(state.value))
        }
    }
})

export const displayReducer = displaySlice.reducer