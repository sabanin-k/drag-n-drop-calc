import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { resetDraggedComponent, setDraggedComponent } from '../../store/reducers/constructorSlice'
import { getToggle } from '../../store/selectors/appSelector'
import { getDropArray } from '../../store/selectors/constructorSelector'
import { dragArray } from '../common/DragArray'
import { DragField } from './DragField'

export const DragFieldContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getToggle)
    const dropArray = useAppSelector(getDropArray)

    const setDraggedComponentHandler = (id: string) => {
        dispatch(setDraggedComponent(id))
    }

    const resetDraggedComponentHandler = () => {
        dispatch(resetDraggedComponent())
    }

    return <DragField dragArray={dragArray}
                    isToggled={isToggled}
                    dropArray={dropArray}
                    setDraggedComponentHandler={setDraggedComponentHandler}
                    resetDraggedComponentHandler={resetDraggedComponentHandler} />
}
