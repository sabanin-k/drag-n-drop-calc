import { Box } from '@chakra-ui/react';
import { useState } from 'react';
import { Field } from './Field'

export const FieldContainer = () => {
    const [dragOver, setDragOver] = useState(false)
    const fieldArray = [] as any[]

    const dragOverHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setDragOver(true)
    };

    const dragLeaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setDragOver(false)
    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        fieldArray.push(event)
    }

    return <Box onDragOver={(event) => dragOverHandler(event)}
                onDragLeave={(event) => dragLeaveHandler(event)}
                onDragEnd={(event) => dragLeaveHandler(event)} 
                onDrop={(event) => dropHandler(event)} >
        <Field dragOver={dragOver}
            fieldArray={fieldArray} />
    </Box>
}
