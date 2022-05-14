import { useAppSelector } from '../../../hooks/useAppSelector'
import { getToggle } from '../../../store/selectors/appSelector'
import { getDropped, getValue } from '../../../store/selectors/displaySelector'
import { Display } from './Display'

export const DisplayContainer = () => {
    const displayValue = useAppSelector(getValue)
    const isToggled = useAppSelector(getToggle)
    const isDropped = useAppSelector(getDropped)

    return <Display displayValue={isDropped ? '0' : displayValue} isToggled={isToggled} />
}
