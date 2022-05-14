import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { runtimeSlice } from '../../../store/reducers/runtimeSlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Equals } from './Equals'

export const EqualsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getToggle)
    const { getEquals } = runtimeSlice.actions

    const displayEquals = () => {
        isToggled && dispatch(getEquals())
    }

    return <Equals displayEquals={displayEquals} isToggled={isToggled} />
}
