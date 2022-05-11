import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { constructorSlice } from '../../../store/reducers/constructorSlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { getDropped, getValue } from '../../../store/selectors/displaySelector'
import { Display } from './Display'

export const DisplayContainer = () => {
    const dispatch = useAppDispatch()
    const displayValue = useSelector(getValue)
    const isToggled = useSelector(getToggle)
    const isDropped = useSelector(getDropped)
    const { setDraggedComponent } = constructorSlice.actions

    const dragStartHandler = () => {
        dispatch(setDraggedComponent(0))
    }

    return <Box onDragStart={dragStartHandler} draggable={!isToggled}>
        <Display displayValue={isDropped ? '0' : displayValue} isToggled={isToggled} />
    </Box>
}
