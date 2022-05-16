import { Box, Flex } from "@chakra-ui/react"
import { FC } from "react"
import { DragArray } from "../common/DragArray"

export const DragField: FC<Props> = ({
    dragArray,
    isToggled,
    dropArray,
    setDraggedComponentHandler,
    resetDraggedComponentHandler
}) => {

    return (
        <Flex direction={'column'} gap={4} >
            {!isToggled
                ? dragArray.map((component) =>
                    <Box key={component.id} shadow={'md'}
                        cursor={!dropArray.includes(component.id) ? 'move' : 'auto'}
                        draggable={!dropArray.includes(component.id)}
                        opacity={dropArray.includes(component.id) ? '0.5' : '1'}
                        onDragStart={() => setDraggedComponentHandler(component.id)}
                        onDragEnd={resetDraggedComponentHandler} >
                        {component.item}
                    </Box>)
                : <Box w={240} />}
        </Flex>
    )
}


type Props = {
    dragArray: DragArray
    isToggled: boolean
    dropArray: string[]
    setDraggedComponentHandler: (id: string) => void
    resetDraggedComponentHandler: () => void
}