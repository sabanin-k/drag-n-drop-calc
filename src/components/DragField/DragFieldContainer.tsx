import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { resetDraggedComponent, setDraggedComponent } from '../../store/reducers/constructorSlice'
import { getRuntimeToggler } from '../../store/selectors/appSelector'
import { getDropArray } from '../../store/selectors/constructorSelector'
import { componentsList } from '../../data/componentsList'
import { DragField } from './DragField'

export const DragFieldContainer = () => {
    const dispatch = useAppDispatch()
    const isRuntime = useAppSelector(getRuntimeToggler)
    const dropArray = useAppSelector(getDropArray)

    const setDraggedComponentHandler = (id: string) => {
        dispatch(setDraggedComponent(id))
    }

    const resetDraggedComponentHandler = () => {
        dispatch(resetDraggedComponent())
    }

    return <DragField dragArray={componentsList}
                    isRuntime={isRuntime}
                    dropArray={dropArray}
                    setDraggedComponentHandler={setDraggedComponentHandler}
                    resetDraggedComponentHandler={resetDraggedComponentHandler} />
}
