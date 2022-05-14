import { Box } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { constructorSlice } from '../../../store/reducers/constructorSlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { getFieldArray } from '../../../store/selectors/constructorSelector'
import { getDropped, getValue } from '../../../store/selectors/displaySelector'
import { Display } from './Display'

export const DisplayContainer = () => {
    const dispatch = useAppDispatch()
    const displayValue = useAppSelector(getValue)
    const isToggled = useAppSelector(getToggle)
    const isDropped = useAppSelector(getDropped)
    const fieldArray = useAppSelector(getFieldArray)
    const { setDraggedComponent } = constructorSlice.actions

    const dragStartHandler = () => {
        dispatch(setDraggedComponent(0))
    }

    return <Box onDragStart={dragStartHandler} draggable={!isToggled} >
        <Display displayValue={isDropped ? '0' : displayValue} isToggled={isToggled} fieldArray={fieldArray} />
    </Box>
}
