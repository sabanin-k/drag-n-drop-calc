import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { constructorSlice } from '../../store/reducers/constructorSlice';
import { getComponentID } from '../../store/selectors/constructorSelector';
import { AppArray } from '../AppArray/AppArray';
import { DropField } from './DropField';

export const DropFieldContainer = () => {
    const dispatch = useAppDispatch()
    const { setDraggedComponent } = constructorSlice.actions
    const [dragOver, setDragOver] = useState(false)
    const [fieldArray, setFieldArray] = useState([] as JSX.Element[])
    const componentID = useSelector(getComponentID)

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setDragOver(true)
    };

    const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setDragOver(false)
    }

    const dropHandler = () => {
        !fieldArray.includes(AppArray[+componentID]) && setFieldArray([...fieldArray, AppArray[+componentID]])
        dispatch(setDraggedComponent(0))
    }

    return <Box onDragOver={(event) => dragOverHandler(event)}
                onDragLeave={(event) => dragLeaveHandler(event)}
                onDragEnd={(event) => dragLeaveHandler(event)}
                onDrop={dropHandler} >
        <DropField dragOver={dragOver}
            fieldArray={fieldArray} />
    </Box>
}
