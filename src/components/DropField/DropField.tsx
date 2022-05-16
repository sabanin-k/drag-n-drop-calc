import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { componentsList } from '../../data/componentsList';
import { DropIndicator } from './DropIndicator';
import dndImage from '../../assets/dragndrop.png';

export const DropField: FC<Props> = ({
    plugDragOver,
    fieldArray,
    isRuntime,
    dragedComponent,
    hoveredComponent,
    dragStartHandler,
    removeElementHandler,
    componentDragOverHandler,
    componentDragLeaveHandler
}) => {
    const isDragDisplay = dragedComponent === 'display'
    const isHoveredDisplay = hoveredComponent === 'display'
    const dragedComponentIndex = fieldArray.findIndex(component => component === dragedComponent)
    const hoveredComponentIndex = fieldArray.findIndex(component => component === hoveredComponent)
    const showTopIndicator = () => {
        return fieldArray.findIndex(component => component === dragedComponent) === -1
            ? hoveredComponent !== ''
            : dragedComponentIndex > hoveredComponentIndex
    }
    const showBottomIndicator = () => {
        return fieldArray.findIndex(component => component === dragedComponent) !== -1
            ? dragedComponentIndex < hoveredComponentIndex
            : false
    }

    return (
        fieldArray.length === 0
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

                {isDragDisplay && <DropIndicator />}

                {fieldArray.map((componentID) => {
                    const showIndicator = hoveredComponent === componentID
                    const componentIndex = componentsList.findIndex(component => component.id === componentID)

                    return (
                        <Box key={componentID}>
                            {(showIndicator && showTopIndicator() && !isHoveredDisplay && !isDragDisplay)
                                && <DropIndicator key={Math.random()} />}

                            <Box
                                draggable={!isRuntime && componentID !== 'display'}
                                cursor={!isRuntime && componentID !== 'display' ? 'move' : 'auto'}
                                onDoubleClick={() => !isRuntime && removeElementHandler(componentID)}
                                onDragEnter={() => componentDragOverHandler(componentID)}
                                onDragStart={() => dragStartHandler(componentID)}
                                onDragEnd={componentDragLeaveHandler}
                            >
                                {componentsList[componentIndex].item}
                            </Box>

                            {((showIndicator && showBottomIndicator() && !isDragDisplay)
                                || (isHoveredDisplay && componentID === 'display'))
                                && <DropIndicator key={Math.random()} />}
                        </Box>
                    )
                }
                )}

                {dragedComponent && !isDragDisplay && fieldArray.length !== 4 && hoveredComponent === '' && <DropIndicator key={Math.random()} />}

            </Flex>
    )
}


interface Props {
    plugDragOver: boolean
    isRuntime: boolean
    fieldArray: string[]
    dragedComponent: string
    hoveredComponent: string
    dragStartHandler: (elemID: string) => void
    removeElementHandler: (elemID: string) => void
    componentDragOverHandler: (elemID: string) => void
    componentDragLeaveHandler: () => void
}