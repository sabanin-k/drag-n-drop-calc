import { Box } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { constructorSlice } from '../../../store/reducers/constructorSlice'
import { runtimeSlice } from '../../../store/reducers/runtimeSlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Digits } from './Digits'

export const DigitsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getToggle)
    const { setNumber } = runtimeSlice.actions
    const { setDraggedComponent } = constructorSlice.actions

    const displayNumber = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isToggled && dispatch(setNumber(e.currentTarget.value))
    }

    const dragStartHandler = () => {
        dispatch(setDraggedComponent(2))
    }

    return <Box onDragStart={dragStartHandler} draggable={!isToggled} >
        <Digits displayNumber={displayNumber} isToggled={isToggled} />
    </Box>
}
