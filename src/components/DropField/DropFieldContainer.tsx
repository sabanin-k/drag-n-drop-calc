import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getToggle } from '../../store/selectors/appSelector';
import { getDragComponentID, getDropArray, getHoveredComponent } from '../../store/selectors/constructorSelector';
import { DropField } from './DropField';
import {
    dropElementOnField,
    removeElementFromField,
    resetHoveredComponent,
    setDraggedComponent,
    setHoveredComponentIndex
} from '../../store/reducers/constructorSlice';

export const DropFieldContainer = () => {
    const dispatch = useAppDispatch()
    const isToggle = useAppSelector(getToggle)
    const fieldArray = useAppSelector(getDropArray)
    const dragedComponent = useAppSelector(getDragComponentID)
    const hoveredComponent = useAppSelector(getHoveredComponent)

    const [plugDragOver, setPlugDragOver] = useState(false)

    const dragStartHandler = (componentID: string) => {
        dispatch(setDraggedComponent(componentID))
    }

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setPlugDragOver(true)
    };

    const componentDragOverHandler = (componentIndex: string) => {
        dispatch(setHoveredComponentIndex(componentIndex))
    }

    const componentDragLeaveHandler = () => {
        dispatch(resetHoveredComponent())
    }

    const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setPlugDragOver(false)
    }

    const dropHandler = () => {
        dispatch(dropElementOnField())
        setPlugDragOver(false)
    }

    const removeElementHandler = (componentID: string) => {
        dispatch(removeElementFromField(componentID))
    }

    return (
        <Box onDragOver={(event) => dragOverHandler(event)}
            onDragLeave={(event) => dragLeaveHandler(event)}
            onDragEnd={(event) => dragLeaveHandler(event)}
            onDrop={dropHandler}
        >
            <DropField plugDragOver={plugDragOver}
                fieldArray={fieldArray}
                isToggle={isToggle}
                dragedComponent={dragedComponent}
                hoveredComponent={hoveredComponent}
                dragStartHandler={dragStartHandler}
                removeElementHandler={removeElementHandler}
                componentDragOverHandler={componentDragOverHandler}
                componentDragLeaveHandler={componentDragLeaveHandler} />
        </Box>
    )
}
