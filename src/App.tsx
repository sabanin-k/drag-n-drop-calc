import { Flex } from '@chakra-ui/react';
import { ButtonsContainer } from './components/Calculator/Buttons/ButtonsContainer';
import { DisplayContainer } from './components/Calculator/Display/DisplayContainer';
import { EqualsContainer } from './components/Calculator/Equals/EqualsContainer';
import { NumbersContainer } from './components/Calculator/Numbers/NumbersContainer';
import { FieldContainer } from './components/Field/FieldContainer';
import { Toggler } from './components/Toggler/Toggler';

const App = () => {
    return <Flex justifyContent={'center'} alignItems={'center'} gap={14}>
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} h={'100vh'} gap={4}>
            <DisplayContainer />
            <ButtonsContainer />
            <NumbersContainer />
            <EqualsContainer />
        </Flex>
        <Flex direction={'column'} align={'center'} gap={4}>
            <Toggler />
            <FieldContainer />
        </Flex>
    </Flex>
}

export default App;
