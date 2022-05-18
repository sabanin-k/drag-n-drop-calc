import { FC } from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { componentsList } from '../../data/componentsList'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useAppSelector } from '../../hooks/useAppSelector'
import { getRuntimeToggler } from '../../store/selectors/appSelector'
import { Indicator } from './Indicator'
import {
    getDragComponentID,
    getDropArray,
    getHoveredComponent
} from '../../store/selectors/constructorSelector'
import {
    removeElementFromField,
    resetHoveredComponent,
    setDraggedComponent,
    setHoveredComponentIndex
} from '../../store/reducers/constructorSlice'

export const NonEmptyField: FC = () => {
    const dispatch = useAppDispatch()
    const isRuntime = useAppSelector(getRuntimeToggler)
    const fieldArray = useAppSelector(getDropArray)
    const dragedComponent = useAppSelector(getDragComponentID)
    const hoveredComponent = useAppSelector(getHoveredComponent)
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

    const dragStartHandler = (componentID: string) => {
        dispatch(setDraggedComponent(componentID))
    }

    const componentDragOverHandler = (componentIndex: string) => {
        dispatch(setHoveredComponentIndex(componentIndex))
    }

    const removeElementHandler = (componentID: string) => {
        dispatch(removeElementFromField(componentID))
    }

    const isDragDisplay = dragedComponent === 'display'

    return (
        <Flex direction={'column'} h={'480px'} gap={4} >

            {isDragDisplay && <Indicator />}

            {fieldArray.map((componentID) => {
                const showIndicator = hoveredComponent === componentID
                const componentIndex = componentsList.findIndex(component => component.id === componentID)
                const isHoveredDisplay = hoveredComponent === 'display'

                return (
                    <Box key={componentID}>
                        {(showIndicator && showTopIndicator() && !isHoveredDisplay && !isDragDisplay)
                            && <Indicator key={Math.random()} />}

                        <Box
                            draggable={!isRuntime && componentID !== 'display'}
                            cursor={!isRuntime && componentID !== 'display' ? 'move' : 'default'}
                            onDoubleClick={() => !isRuntime && removeElementHandler(componentID)}
                            onDragEnter={() => componentDragOverHandler(componentID)}
                            onDragStart={() => dragStartHandler(componentID)}
                            onDragEnd={() => resetHoveredComponent()}
                        >
                            {componentsList[componentIndex].item}
                        </Box>

                        {((showIndicator && showBottomIndicator() && !isDragDisplay)
                            || (isHoveredDisplay && componentID === 'display'))
                            && <Indicator key={Math.random()} />}
                    </Box>
                )
            }
            )}

            {dragedComponent && !isDragDisplay && fieldArray.length !== 4 && hoveredComponent === '' && <Indicator key={Math.random()} />}

        </Flex>
    )
}
