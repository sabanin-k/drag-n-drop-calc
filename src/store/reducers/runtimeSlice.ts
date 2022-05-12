/* eslint-disable no-eval */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const runtimeSlice = createSlice({
    name: 'runtimeSlice',
    initialState: {
        x: '',
        y: '',
        sign: '',
        finish: false,
        value: '',
        dropped: false
    },
    reducers: {
        setValue(state, action: PayloadAction<string>) {
            state.value = state.value + (+action.payload)
        },
        setDropped(state) {
            state.dropped = true
        },
        setSign(state, action: PayloadAction<string>) {
            state.sign = action.payload
        },
        setNumber(state, action: PayloadAction<string>) {
            if (state.y === '' && state.sign === '') {
                if (action.payload === '.' && state.x.includes('.')){
                    state.x += ''
                } else {
                    state.x += action.payload
                    state.value = state.x.toString().replace('.', ',')
                }
            } else if (state.x !== '' && state.y !== '' && state.finish) {
                state.y = action.payload
                state.finish = false
                state.value = state.y.toString().replace('.', ',')
            } else {
                if (action.payload === '.' && state.y.includes('.')) {
                    state.y += ''
                } else {
                    state.y += action.payload
                    state.value = state.y.toString().replace('.', ',')
                }
            }
            return
        },
        getEquals(state) {
            if (state.sign === '') {
                return
            }
            if (state.y === null) {
                state.y = state.x
            }
            if (state.x !== '' && state.y !== '') {
                switch (state.sign) {
                    case '+':
                        state.x = (+state.x + +state.y).toString()
                        break;
                    case '-':
                        state.x = (+state.x - +state.y).toString()
                        break;
                    case 'x':
                        state.x = (+state.x * +state.y).toString()
                        break;
                    case '/':
                        if (state.y === '0') {
                            state.value = 'Не определено'
                            state.x = ''
                            state.y = ''
                            state.sign = ''
                            return
                        }
                        state.x = (+state.x / +state.y).toString()
                        break;
                    default:
                        break;
                }
            }
            state.finish = true;

            if (state.x.length > 13) { // rounding up
                if (Number(state.x.slice(13, 14)) > 5) {
                    state.x = (state.x.slice(0, 12) + (Number(state.x.slice(13, 14)) + 1))
                } else {
                    state.x = (state.x.slice(0, 13))
                }
            }
            console.log(state.x);
            
            state.value = parseFloat(state.x).toString().replace('.', ',')
        }
    }
})

export const runtimeReducer = runtimeSlice.reducer