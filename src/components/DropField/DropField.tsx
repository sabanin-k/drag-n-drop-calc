import { FC } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { dragArray } from '../common/DragArray';
import { DropIndicator } from '../common/DropIndicator';
import dndImage from '../../assets/dragndrop.png';

export const DropField: FC<Props> = ({
    plugDragOver,
    fieldArray,
    isToggle,
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
                    const componentIndex = dragArray.findIndex(component => component.id === componentID)

                    return (
                        <>
                            {(showIndicator && showTopIndicator() && !isHoveredDisplay && !isDragDisplay)
                                && <DropIndicator key={Date()} />}

                            <Box
                                key={componentID}
                                draggable={!isToggle && componentID !== 'display'}
                                cursor={!isToggle ? 'move' : 'auto'}
                                onDoubleClick={() => !isToggle && removeElementHandler(componentID)}
                                onDragEnter={() => componentDragOverHandler(componentID)}
                                onDragStart={() => dragStartHandler(componentID)}
                                onDragEnd={componentDragLeaveHandler}
                            >
                                {dragArray[componentIndex].item}
                            </Box>

                            {((showIndicator && showBottomIndicator() && !isDragDisplay)
                                || (isHoveredDisplay && componentID === 'display'))
                                && <DropIndicator key={Date()} />}
                        </>
                    )
                }
                )}

                {dragedComponent && !isDragDisplay && fieldArray.length !== 4 && hoveredComponent === '' && <DropIndicator />}

            </Flex>
    )
}


interface Props {
    plugDragOver: boolean
    isToggle: boolean
    fieldArray: string[]
    dragedComponent: string
    hoveredComponent: string
    dragStartHandler: (elemID: string) => void
    removeElementHandler: (elemID: string) => void
    componentDragOverHandler: (elemID: string) => void
    componentDragLeaveHandler: () => void
}