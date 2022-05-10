import React from 'react'
import { useAppDispatch } from '../../../hooks/redux'
import { displaySlice } from '../../../store/reducers/displaySlice'
import { Numbers } from './Numbers'

export const NumbersContainer = () => {
    const dispatch = useAppDispatch()
    const { setValue } = displaySlice.actions

    const displayNumber = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        dispatch(setValue(e.currentTarget.value))
    }
    return <Numbers displayNumber={displayNumber} />
}
