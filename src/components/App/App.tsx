import { Flex } from '@chakra-ui/react';
import Toggler from '../Toggler';
import DragField from '../DragField';
import DropField from '../DropField';

const App = () => {
    return (
        <Flex justify={'center'} align={'center'} direction={'column'} h={'100vh'} gap={4}>
            <Flex justify={'end'} minW={'520px'} >
                <Toggler />
            </Flex>
            <Flex gap={10}>
                <DragField />
                <DropField />
            </Flex>
        </Flex>
    )
}

export default App;
