import React from 'react'
import { useSelector } from 'react-redux'
import { getValue } from '../../../store/selectors/displaySelector'
import { Display } from './Display'

export const DisplayContainer = () => {
    const value = useSelector(getValue)
    return (
        <Display value={value} />
    )
}
