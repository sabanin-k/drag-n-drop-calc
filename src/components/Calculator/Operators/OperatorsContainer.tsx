import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { setOperator } from '../../../store/reducers/runtimeSlice'
import { getRuntimeToggler } from '../../../store/selectors/appSelector'
import { Operators } from './Operators'

export const OperatorsContainer = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getRuntimeToggler)

    const setSignHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isToggled && dispatch(setOperator(e.currentTarget.value))
    }

    return <Operators setSignHandler={setSignHandler} isToggled={isToggled} />
}
