import { useSelector } from 'react-redux'
import { useAppDispatch } from '../../hooks/redux'
import { appSlice } from '../../store/reducers/appSlice'
import { getToggle } from '../../store/selectors/appSelector'
import { Constructor } from './Constructor/Constructor'
import { Runtime } from './Runtime/Runtime'

export const Toggler = () => {
    const dispatch = useAppDispatch()
    const { setToggle } = appSlice.actions
    const toggle = useSelector(getToggle)

    const toggleToRuntime = () => dispatch(setToggle(true))
    const toggleToConstructor = () => dispatch(setToggle(false))

    return toggle
        ? <Runtime toggleToConstructor={toggleToConstructor} />
        : <Constructor toggleToRuntime={toggleToRuntime} />
}
