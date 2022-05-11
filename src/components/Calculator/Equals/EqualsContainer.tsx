import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { constructorSlice } from '../../../store/reducers/constructorSlice'
import { displaySlice } from '../../../store/reducers/displaySlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Equals } from './Equals'

export const EqualsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useSelector(getToggle)
    const { setDraggedComponent } = constructorSlice.actions
    const { getEquals } = displaySlice.actions

    const displayEquals = () => {
        isToggled && dispatch(getEquals())
    }

    const dragStartHandler = () => dispatch(setDraggedComponent(3))

    return <Box onDragStart={dragStartHandler} draggable={!isToggled} >
        <Equals displayEquals={displayEquals} isToggled={isToggled} />
    </Box>
}