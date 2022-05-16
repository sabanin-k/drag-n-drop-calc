import { OperatorsContainer } from "../Calculator/Operators/OperatorsContainer";
import { DisplayContainer } from "../Calculator/Display/DisplayContainer";
import { EqualsContainer } from "../Calculator/Equals/EqualsContainer";
import { DigitsContainer } from "../Calculator/Digits/DigitsContainer";

export const AppArray = [
    {id: 'display', item: <DisplayContainer />},
    {id: 'operators', item: <OperatorsContainer />},
    {id: 'digits', item: <DigitsContainer />},
    {id: 'equals', item: <EqualsContainer />}
]
