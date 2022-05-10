import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/appSlice";
import { displayReducer } from "./reducers/displaySlice";

const rootReducer = combineReducers({
    appReducer,
    displayReducer
})

export const setupStore = () => {
    return configureStore({reducer: rootReducer})
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']