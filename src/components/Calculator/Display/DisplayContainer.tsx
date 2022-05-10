import React from 'react'
import { useSelector } from 'react-redux'
import { getToggle } from '../../../store/selectors/appSelector'
import { getValue } from '../../../store/selectors/displaySelector'
import { Display } from './Display'

export const DisplayContainer = () => {
    const displayValue = useSelector(getValue)
    const isToggled = useSelector(getToggle)

    return (
        <Display displayValue={displayValue} isToggled={isToggled} />
    )
}
