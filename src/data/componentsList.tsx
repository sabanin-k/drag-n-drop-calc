import { OperatorsContainer } from "../components/Calculator/Operators/OperatorsContainer";
import { DisplayContainer } from "../components/Calculator/Display/DisplayContainer";
import { EqualsButtonContainer } from "../components/Calculator/EqualsButton/EqualsButtonContainer";
import { DigitsContainer } from "../components/Calculator/Digits/DigitsContainer";

export const componentsList = [
    {id: 'display', item: <DisplayContainer />},
    {id: 'operators', item: <OperatorsContainer />},
    {id: 'digits', item: <DigitsContainer />},
    {id: 'equals', item: <EqualsButtonContainer />}
]

export type DragArray = typeof componentsList