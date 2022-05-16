import { Flex } from '@chakra-ui/react';
import { DragFieldContainer } from './components/DragField/DragFieldContainer';
import { DropFieldContainer } from './components/DropField/DropFieldContainer';
import { TogglerContainer } from './components/Toggler/TogglerContainer';

const App = () => {
    return (
        <Flex justify={'center'} align={'center'} direction={'column'} h={'100vh'} gap={4}>
            <Flex justify={'end'} minW={'520px'} >
                <TogglerContainer />
            </Flex>
            <Flex gap={10}>
                <DragFieldContainer />
                <DropFieldContainer />
            </Flex>
        </Flex>
    )
}

export default App;
