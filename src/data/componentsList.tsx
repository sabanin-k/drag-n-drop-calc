import Display from "../components/Calculator/Display";
import Operators from "../components/Calculator/Operators";
import Digits from "../components/Calculator/Digits";
import EqualsButton from "../components/Calculator/EqualsButton";

export const componentsList = [
    {id: 'display', item: <Display />},
    {id: 'operators', item: <Operators />},
    {id: 'digits', item: <Digits />},
    {id: 'equals', item: <EqualsButton />}
]

export type DragArray = typeof componentsList