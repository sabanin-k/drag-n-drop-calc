import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { constructorSlice } from '../../../store/reducers/constructorSlice'
import { displaySlice } from '../../../store/reducers/displaySlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Buttons } from './Buttons'

export const ButtonsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useSelector(getToggle)
    const { setDraggedComponent } = constructorSlice.actions
    const { setValue } = displaySlice.actions

    const displaySign = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isToggled && dispatch(setValue(e.currentTarget.value))
    }

    const dragStartHandler = () => {
        dispatch(setDraggedComponent(1))
    }

    return <Box onDragStart={dragStartHandler} draggable={!isToggled}>
        <Buttons displaySign={displaySign} isToggled={isToggled} />
    </Box>
}
