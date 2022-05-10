import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/redux'
import { displaySlice } from '../../../store/reducers/displaySlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Numbers } from './Numbers'

export const NumbersContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useSelector(getToggle)
    const { setValue } = displaySlice.actions

    const displayNumber = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(setValue(e.currentTarget.value))
    }
    return <Numbers displayNumber={displayNumber} isToggled={isToggled} />
}
