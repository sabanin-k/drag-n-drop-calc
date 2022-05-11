import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { constructorSlice } from '../../../store/reducers/constructorSlice'
import { displaySlice } from '../../../store/reducers/displaySlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Numbers } from './Numbers'

export const NumbersContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useSelector(getToggle)
    const { setValue } = displaySlice.actions
    const { setDraggedComponent } = constructorSlice.actions

    const displayNumber = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isToggled && dispatch(setValue(e.currentTarget.value))
    }

    const dragStartHandler = () => {
        dispatch(setDraggedComponent(2))
    }

    return <Box onDragStart={dragStartHandler} draggable={!isToggled}>
        <Numbers displayNumber={displayNumber} isToggled={isToggled} />
    </Box>
}
