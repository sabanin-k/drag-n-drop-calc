import { ButtonsContainer } from "../Calculator/Buttons/ButtonsContainer";
import { DisplayContainer } from "../Calculator/Display/DisplayContainer";
import { EqualsContainer } from "../Calculator/Equals/EqualsContainer";
import { NumbersContainer } from "../Calculator/Numbers/NumbersContainer";

export const AppArray = [
    <DisplayContainer key={'display'} />,
    <ButtonsContainer key={'buttons'} />,
    <NumbersContainer key={'number'} />,
    <EqualsContainer key={'equals'} />
]
