import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        isInitialized: false,
        toggle: false
    },
    reducers: {
        setInitialization(state) {
            state.isInitialized = true
        },
        setToggle(state, action: PayloadAction<boolean>) {
            state.toggle = action.payload
        }
    }
})

export const appReducer = appSlice.reducer