import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/redux'
import { displaySlice } from '../../../store/reducers/displaySlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Equals } from './Equals'

export const EqualsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useSelector(getToggle)
    const { getEquals } = displaySlice.actions

    const displayEquals = () => {
        dispatch(getEquals())
    }

    return <Equals displayEquals={displayEquals} isToggled={isToggled} />
}
