import { FC } from "react"
import { Box, Flex } from "@chakra-ui/react"
import { componentsList } from "../../data/componentsList"
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { getRuntimeToggler } from "../../store/selectors/appSelector"
import { getDropArray } from "../../store/selectors/constructorSelector"
import { resetDraggedComponent, setDraggedComponent } from "../../store/reducers/constructorSlice"

export const DragField: FC = () => {
    const dispatch = useAppDispatch()
    const isRuntime = useAppSelector(getRuntimeToggler)
    const dropArray = useAppSelector(getDropArray)

    const setDraggedComponentHandler = (id: string) => {
        dispatch(setDraggedComponent(id))
    }

    const resetDraggedComponentHandler = () => {
        dispatch(resetDraggedComponent())
    }

    return (
        <Flex direction={'column'} gap={4} >
            {isRuntime
                ? <Box w={240} />
                : componentsList.map((component) =>
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
