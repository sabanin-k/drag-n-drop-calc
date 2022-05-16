import { Box, Flex } from "@chakra-ui/react"
import { FC } from "react"
import { DragArray } from "../../data/componentsList"

export const DragField: FC<Props> = ({
    dragArray,
    isRuntime,
    dropArray,
    setDraggedComponentHandler,
    resetDraggedComponentHandler
}) => {
    return (
        <Flex direction={'column'} gap={4} >
            {isRuntime
                ? <Box w={240} />
                : dragArray.map((component) =>
                    <Box
                        key={component.id}
                        shadow={'md'}
                        draggable={!dropArray.includes(component.id)}
                        cursor={dropArray.includes(component.id) ? 'auto' : 'move'}
                        opacity={dropArray.includes(component.id) ? '0.5' : '1'}
                        onDragStart={() => setDraggedComponentHandler(component.id)}
                        onDragEnd={resetDraggedComponentHandler}
                    >
                        {component.item}
                    </Box>
                )}
        </Flex>
    )
}


type Props = {
    dragArray: DragArray
    isRuntime: boolean
    dropArray: string[]
    setDraggedComponentHandler: (id: string) => void
    resetDraggedComponentHandler: () => void
}