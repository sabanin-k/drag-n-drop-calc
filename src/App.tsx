import { Box, Flex } from '@chakra-ui/react';
import { AppArray } from './components/AppArray/AppArray';
import { DropFieldContainer } from './components/DropField/DropFieldContainer';
import { Toggler } from './components/Toggler/Toggler';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { constructorSlice } from './store/reducers/constructorSlice';
import { getToggle } from './store/selectors/appSelector';
import { getFieldArray } from './store/selectors/constructorSelector';

const App = () => {
    const dispatch = useAppDispatch()
    const isToggled = useAppSelector(getToggle)
    const FieldArray = useAppSelector(getFieldArray)
    const { setDraggedComponent } = constructorSlice.actions

    return <Flex justify={'center'} align={'center'} direction={'column'} h={'100vh'} gap={4}>
        <Flex justify={'end'} minW={'520px'} >
            <Toggler />
        </Flex>
        <Flex gap={10}>
            <Flex direction={'column'} gap={4} >
                { !isToggled
                    ? AppArray.map((component, index) => 
                        <Box key={index} shadow={'md'}
                            cursor={!FieldArray.includes(index) ? 'move' : 'auto'}
                            draggable={!FieldArray.includes(index)}
                            opacity={FieldArray.includes(index) ? '0.5' : '1'}
                            onDragStart={() => dispatch(setDraggedComponent(index))} >
                            {component}
                        </Box> )
                    : <Box w={240} /> }
            </Flex>
            <DropFieldContainer />
        </Flex>
    </Flex>
}

export default App;
