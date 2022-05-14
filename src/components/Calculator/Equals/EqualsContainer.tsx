import { Box } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { constructorSlice } from '../../../store/reducers/constructorSlice'
import { runtimeSlice } from '../../../store/reducers/runtimeSlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Equals } from './Equals'

export const EqualsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getToggle)
    const { setDraggedComponent } = constructorSlice.actions
    const { getEquals } = runtimeSlice.actions

    const displayEquals = () => {
        isToggled && dispatch(getEquals())
    }

    const dragStartHandler = () => dispatch(setDraggedComponent(3))

    return <Box onDragStart={dragStartHandler} draggable={!isToggled} >
        <Equals displayEquals={displayEquals} isToggled={isToggled} />
    </Box>
}
