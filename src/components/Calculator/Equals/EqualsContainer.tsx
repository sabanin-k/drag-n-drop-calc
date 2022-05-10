import React from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { displaySlice } from '../../../store/reducers/displaySlice'
import { Equals } from './Equals'

export const EqualsContainer = () => {
    const dispatch = useAppDispatch()
    const { getEquals } = displaySlice.actions

    const displayEquals = () => {
        dispatch(getEquals())
    }

    return <Equals displayEquals={displayEquals} />
}
