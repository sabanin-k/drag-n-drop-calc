import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./reducers/appSlice";
import { runtimeReducer } from "./reducers/runtimeSlice";
import { constructorReducer } from "./reducers/constructorSlice";

const rootReducer = combineReducers({
    appReducer,
    runtimeReducer,
    constructorReducer
})

export const setupStore = () => {
    return configureStore({reducer: rootReducer})
}


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']