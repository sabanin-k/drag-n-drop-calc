import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { runtimeSlice } from '../../../store/reducers/runtimeSlice'
import { getToggle } from '../../../store/selectors/appSelector'
import { Digits } from './Digits'

export const DigitsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getToggle)
    const { setNumber } = runtimeSlice.actions

    const displayNumber = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isToggled && dispatch(setNumber(e.currentTarget.value))
    }

    return <Digits displayNumber={displayNumber} isToggled={isToggled} />
}
