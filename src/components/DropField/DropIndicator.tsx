import { Box, Flex } from "@chakra-ui/react"
import { FC } from "react"

export const DropIndicator: FC = () => {
    return <Flex>
        <Box w={'7px'} h={'7px'} transform={'rotate(45deg)'} bg={'blue'} ></Box>
        <Box w={'100%'} h={'1px'} bg={'blue'} mt={'3px'} ></Box>
        <Box w={'7px'} h={'7px'} transform={'rotate(45deg)'} bg={'blue'} ></Box>
    </Flex>
}
