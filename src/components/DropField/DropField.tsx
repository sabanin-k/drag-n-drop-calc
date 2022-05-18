import { FC, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { EmptyField } from './EmptyField';
import { NonEmptyField } from './NonEmptyField';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useAppSelector } from '../../hooks/useAppSelector';
import { getDropArray } from '../../store/selectors/constructorSelector';
import { dropElementOnField } from '../../store/reducers/constructorSlice';

export const DropField: FC = () => {
    const dispatch = useAppDispatch()
    const fieldArray = useAppSelector(getDropArray)

    const [isPlugDragOver, setPlugDragOver] = useState(false)
    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setPlugDragOver(true)
    };
    const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setPlugDragOver(false)
    }
    const dropHandler = () => {
        dispatch(dropElementOnField())
        setPlugDragOver(false)
    }

    return (
        <Box
            onDragOver={(event) => dragOverHandler(event)}
            onDragLeave={(event) => dragLeaveHandler(event)}
            onDragEnd={(event) => dragLeaveHandler(event)}
            onDrop={dropHandler}
        >
            {fieldArray.length === 0
                ? <EmptyField isPlugDragOver={isPlugDragOver} />
                : <NonEmptyField />}
        </Box>
    )
}
