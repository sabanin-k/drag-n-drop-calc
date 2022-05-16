import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const appSlice = createSlice({
    name: 'appSlice',
    initialState: {
        isRuntime: false
    },
    reducers: {
        setToggleToRuntime(state, action: PayloadAction<boolean>) {
            state.isRuntime = action.payload
        }
    }
})

export const appReducer = appSlice.reducer
export const {
    setToggleToRuntime
} = appSlice.actions