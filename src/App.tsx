import { Flex } from '@chakra-ui/react';
import { Buttons } from './components/Calculator/Buttons/Buttons';
import { Numbers } from './components/Calculator/Numbers/Numbers';
import { Display } from './components/Calculator/Display/Display';
import { Field } from './components/Field/Field';
import { Toggler } from './components/Toggler/Toggler';
import { Equals } from './components/Calculator/Equals/Equals';

const App = () => {
    return <Flex justifyContent={'center'} alignItems={'center'} gap={14}>
        <Flex justifyContent={'center'} alignItems={'center'} flexDirection={'column'} h={'100vh'} gap={4}>
            <Display value={0} />
            <Buttons />
            <Numbers />
            <Equals />
        </Flex>
        <Flex direction={'column'} align={'center'} gap={4}>
            <Toggler />
            <Field />
        </Flex>
    </Flex>
}

export default App;
