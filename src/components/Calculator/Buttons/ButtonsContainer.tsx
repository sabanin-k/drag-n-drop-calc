import React from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { displaySlice } from '../../../store/reducers/displaySlice'
import { Buttons } from './Buttons'

export const ButtonsContainer = () => {
    const dispatch = useAppDispatch()
    const { setValue } = displaySlice.actions

    const displaySign = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(setValue(e.currentTarget.value))
    }

    return <Buttons displaySign={displaySign} />
}
