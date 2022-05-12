import { Box } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { constructorSlice } from '../../../store/reducers/constructorSlice'
import { runtimeSlice } from '../../../store/reducers/runtimeSlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Signes } from './Signes'

export const SignesContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useSelector(getToggle)
    const { setDraggedComponent } = constructorSlice.actions
    const { setSign } = runtimeSlice.actions

    const setSignHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isToggled && dispatch(setSign(e.currentTarget.value))
    }

    const dragStartHandler = () => {
        dispatch(setDraggedComponent(1))
    }

    return <Box onDragStart={dragStartHandler} draggable={!isToggled}>
        <Signes setSignHandler={setSignHandler} isToggled={isToggled} />
    </Box>
}
