import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { setToggleToRuntime } from '../../store/reducers/appSlice'
import { getRuntimeToggler } from '../../store/selectors/appSelector'
import { Toggler } from './Toggler'

export const TogglerContainer = () => {
    const dispatch = useAppDispatch()
    const isRuntime = useAppSelector(getRuntimeToggler)

    const toggleToRuntime = () => dispatch(setToggleToRuntime(true))
    const toggleToConstructor = () => dispatch(setToggleToRuntime(false))

    return <Toggler
                toggleToRuntime={toggleToRuntime}
                toggleToConstructor={toggleToConstructor}
                isRuntime={isRuntime} />
}
