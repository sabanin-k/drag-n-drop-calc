import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getEquals } from '../../../store/reducers/runtimeSlice'
import { getRuntimeToggler } from '../../../store/selectors/appSelector'
import { EqualsButton } from './EqualsButton'

export const EqualsButtonContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getRuntimeToggler)

    const displayEquals = () => {
        isToggled && dispatch(getEquals())
    }

    return <EqualsButton displayEquals={displayEquals} isToggled={isToggled} />
}
