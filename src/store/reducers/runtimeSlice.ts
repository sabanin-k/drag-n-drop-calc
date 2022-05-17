import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const runtimeSlice = createSlice({
    name: 'runtimeSlice',
    initialState: {
        x: '',
        y: '',
        operator: '',
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
        setOperator(state, action: PayloadAction<string>) {
            if (state.x !== '') {
                state.operator = action.payload              
            }
            if (state.x !== '' && state.y !== '') {
                state.y = ''
            }
        },
        setNumber(state, action: PayloadAction<string>) {
            // set first operand
            if (state.y === '' && state.operator === '') {
                // already has ',' push nothing
                if (action.payload === '.' && state.x.includes('.')) {
                    state.x += ''
                } else {
                    // press ',' before another digit
                    if (action.payload === '.' && state.x === '') {
                        state.x += '0'
                    }
                    state.x += action.payload
                    // pressed 0 but do not press ','
                    if (state.x[0] === '0' && action.payload === '0' && !state.x.includes('.')) {
                        state.x = '0'
                    }
                    state.value = state.x.replace('.', ',')
                }
            } 

            // change second operand after pressed equals button;
            // infinite '='
            else if (state.x !== '' && state.y !== '' && state.finish) {
                state.y = ''
                if (action.payload === '.' && state.y === '') {
                    state.y += '0.'
                } else {
                    state.y = action.payload
                }
                state.finish = false
                state.value = state.y.replace('.', ',')
            }

            // set second operand
            else {
                if (action.payload === '.' && state.y.includes('.')) {
                    state.y += ''
                } else {
                    if (action.payload === '.' && state.y === '') {
                        state.y += '0'
                    }
                    state.y += action.payload
                    if (state.y[0] === '0' && action.payload === '0' && !state.y.includes('.')) {
                        state.y = '0'
                    }
                    state.value = state.y.replace('.', ',')
                }
            }
            return
        },
        getEquals(state) {
            if (state.operator === '' || state.x === '') {
                return
            }
            if (state.y === '') {
                state.y = state.x
            }
            if (state.x !== '' && state.y !== '') {
                switch (state.operator) {
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
                            state.operator = ''
                            return
                        }
                        state.x = (+state.x / +state.y).toString()
                        break;
                    default:
                        break;
                }
            }
            state.finish = true;

            const isFloatAndToLong = +state.x % 1 !== 0 && state.x.length > 13
            if (isFloatAndToLong) { // rounding up
                if (Number(state.x.slice(13, 14)) > 5) {
                    state.x = (state.x.slice(0, 12) + (Number(state.x.slice(13, 14)) + 1))
                } else {
                    state.x = (state.x.slice(0, 13))
                }
            }

            const isHasAnExponent = state.x.includes('e')
            if (isHasAnExponent) {
                const roundNumberWithExp = (numberToRound: string): number => {
                    const [before, after] = numberToRound.split('e');
                    return +`${Number(before).toFixed(2)}e${after}`;
                };
                state.x = roundNumberWithExp(state.x).toString()
            } else {
                state.x = parseFloat(state.x).toString()
            }

            state.value = state.x.replace('.', ',')
        }
    }
})

export const runtimeReducer = runtimeSlice.reducer
export const {
    setValue,
    setDropped,
    setOperator,
    setNumber,
    getEquals
} = runtimeSlice.actions