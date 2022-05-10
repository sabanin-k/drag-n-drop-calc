import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/redux'
import { displaySlice } from '../../../store/reducers/displaySlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Buttons } from './Buttons'

export const ButtonsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useSelector(getToggle)
    const { setValue } = displaySlice.actions

    const displaySign = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(setValue(e.currentTarget.value))
    }

    return <Buttons displaySign={displaySign} isToggled={isToggled} />
}
