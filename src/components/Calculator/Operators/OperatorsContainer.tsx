import { Box } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { constructorSlice } from '../../../store/reducers/constructorSlice'
import { runtimeSlice } from '../../../store/reducers/runtimeSlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Operators } from './Operators'

export const OperatorsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getToggle)
    const { setDraggedComponent } = constructorSlice.actions
    const { setOperator } = runtimeSlice.actions

    const setSignHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isToggled && dispatch(setOperator(e.currentTarget.value))
    }

    const dragStartHandler = () => {
        dispatch(setDraggedComponent(1))
    }

    return <Box onDragStart={dragStartHandler} draggable={!isToggled}>
        <Operators setSignHandler={setSignHandler} isToggled={isToggled} />
    </Box>
}
