import { Flex } from '@chakra-ui/react';
import { Buttons } from './components/Calculator/Buttons/Buttons';
import { Display } from './components/Calculator/Display/Display';
import { Equals } from './components/Calculator/Equals/Equals';
import { Numbers } from './components/Calculator/Numbers/Numbers';
import { FieldContainer } from './components/Field/FieldContainer';
import { Toggler } from './components/Toggler/Toggler';

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
            <FieldContainer />
        </Flex>
    </Flex>
}

export default App;
