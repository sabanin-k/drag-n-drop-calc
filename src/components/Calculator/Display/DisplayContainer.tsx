import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRuntimeToggler } from '../../../store/selectors/appSelector'
import { getDropped, getOperator, getValue, getX, getY } from '../../../store/selectors/displaySelector'
import { Display } from './Display'

export const DisplayContainer = () => {
    const firstOperand = useAppSelector(getX)
    const secondOperand = useAppSelector(getY)
    const operator = useAppSelector(getOperator)
    const displayValue = useAppSelector(getValue)
    const isToggled = useAppSelector(getRuntimeToggler)
    const isDropped = useAppSelector(getDropped)

    return <Display displayValue={isDropped ? '0' : displayValue} isToggled={isToggled}
                    firstOperand={firstOperand} secondOperand={secondOperand} operator={operator} />
}
