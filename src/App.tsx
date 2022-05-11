import { Box, Flex } from '@chakra-ui/react';
import { AppArray } from './components/AppArray/AppArray';
import { DropFieldContainer } from './components/DropField/DropFieldContainer';
import { Toggler } from './components/Toggler/Toggler';

const App = () => {
    return <Flex justify={'center'} align={'center'} gap={14}>
        <Flex justify={'center'} align={'center'} direction={'column'} h={'100vh'} gap={4}>
            { AppArray.map(arr => <Box shadow={'md'}> {arr} </Box>) }
        </Flex>
        <Flex justify={'center'} align={'center'} direction={'column'} gap={4}>
            <Toggler />
            <DropFieldContainer />
        </Flex>
    </Flex>
}

export default App;
