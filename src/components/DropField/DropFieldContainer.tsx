import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { constructorSlice } from '../../store/reducers/constructorSlice';
import { getToggle } from '../../store/selectors/appSelector';
import { getFieldArray } from '../../store/selectors/constructorSelector';
import { DropField } from './DropField';

export const DropFieldContainer = () => {
    const dispatch = useAppDispatch()
    const { setDraggedComponent } = constructorSlice.actions
    const { dropElementOnField } = constructorSlice.actions
    const { removeElementFromField } = constructorSlice.actions
    const [dragOver, setDragOver] = useState(false)
    const fieldArray = useAppSelector(getFieldArray)
    const isToggle = useAppSelector(getToggle)

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setDragOver(true)
    };

    const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setDragOver(false)
    }

    const dropHandler = () => {
        dispatch(dropElementOnField())
        dispatch(setDraggedComponent(0))
    }

    const removeElementHandler = (elemID: number) => {
        dispatch(removeElementFromField(elemID))
    }

    return <Box onDragOver={(event) => dragOverHandler(event)}
                onDragLeave={(event) => dragLeaveHandler(event)}
                onDragEnd={(event) => dragLeaveHandler(event)}
                onDrop={dropHandler} >
        <DropField dragOver={dragOver}
            fieldArray={fieldArray}
            removeElementHandler={removeElementHandler}
            isToggle={isToggle} />
    </Box>
}
