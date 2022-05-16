import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { setNumber } from '../../../store/reducers/runtimeSlice'
import { getRuntimeToggler } from '../../../store/selectors/appSelector'
import { Digits } from './Digits'

export const DigitsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getRuntimeToggler)

    const displayNumber = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isToggled && dispatch(setNumber(e.currentTarget.value))
    }

    return <Digits displayNumber={displayNumber} isToggled={isToggled} />
}
