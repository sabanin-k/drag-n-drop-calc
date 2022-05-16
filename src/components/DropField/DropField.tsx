import { Box, Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { AppArray } from '../common/AppArray';
import dndImage from '../../assets/dragndrop.png';
import { DropIndicator } from '../common/DropIndicator';

export const DropField: FC<Props> = ({
    plugDragOver,
    fieldArray,
    isToggle,
    dragedComponent,
    hoveredComponentIndex,
    dragStartHandler,
    removeElementHandler,
    componentDragOverHandler,
    componentDragLeaveHandler
}) => {
    return fieldArray.length === 0

        ? <Flex justify={'center'}
            gap={2} align={'center'}
            w={'240px'} h={'480px'}
            direction={'column'}
            border={'2px dashed #C4C4C4'}
            backgroundColor={plugDragOver ? '#F0F9FF' : 'white'}>
                <img src={dndImage} alt="dnd" />

                <Flex justify={'center'} align={'center'} direction={'column'} gap={1}>
                    <Text fontSize={14} fontWeight={500} color={'Highlight'} lineHeight={'17px'}>Перетащите сюда</Text>
                    <Text fontSize={12} fontWeight={400} textAlign={'center'} lineHeight={'15px'}>любой элемент<br /> из левой панели</Text>
                </Flex>

        </Flex>

        : <Flex direction={'column'} h={'480px'} gap={4} >
            {fieldArray.map((componentID, index) => {

                const isIndicator = hoveredComponentIndex === index && hoveredComponentIndex !== 0
                const isTopIndicator = fieldArray.findIndex(component => component === dragedComponent) > hoveredComponentIndex
                const isBottomIndicator = fieldArray.findIndex(component => component === dragedComponent) < hoveredComponentIndex
                const componentIndex = AppArray.findIndex(component => component.id === componentID)
                
                return <>
                    {isIndicator && isTopIndicator && <DropIndicator key={index} />}
                    <Box key={componentID} draggable={!isToggle && componentID !== 'display'} cursor={!isToggle ? 'move' : 'auto'}
                                onDoubleClick={() => !isToggle && removeElementHandler(componentID)}
                                onDragEnter={() => componentDragOverHandler(index)}
                                onDragStart={() => dragStartHandler(componentID)}
                                onDragExit={componentDragLeaveHandler} >
                        {AppArray[componentIndex].item}
                    </Box>
                    {isIndicator && isBottomIndicator && <DropIndicator key={index} />}
                </>
                }
            )}
            {dragedComponent && fieldArray.length !== 4 && <DropIndicator />}
        </Flex>
}


interface Props {
    plugDragOver: boolean
    isToggle: boolean
    fieldArray: string[]
    dragedComponent: string
    hoveredComponentIndex: number
    dragStartHandler: (elemID: string) => void
    removeElementHandler: (elemID: string) => void
    componentDragOverHandler: (elemID: number) => void
    componentDragLeaveHandler: () => void
}