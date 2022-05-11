import { Box, Button, Image } from "@chakra-ui/react"
import { FC } from "react"
import blueEye from '../../../assets/blueEye.png'
import darkVector from '../../../assets/darkVector.png'

export const Runtime: FC<Props> = ({ toggleToConstructor }) => {
    return <Box w={'240px'} display={'flex'} gap={2} p={1} bg={'#F3F4F6'} borderRadius={'6px'} >
        <Button display={'flex'} alignItems={'center'} gap={2} bg={'white'} _hover={{ background: 'white' }} _focus={{ outline: 'none' }}>
            <Image src={blueEye} alt="" w={'20px'} h={'20px'} />
            Runtime
        </Button>
        <Box onClick={toggleToConstructor} display={'flex'} alignItems={'center'} gap={2} cursor={'pointer'} >
            <Image src={darkVector} alt="" align={'center'} w={'14px'} h={'10px'} />
            Constructor
        </Box>
    </Box>
}


interface Props{
    toggleToConstructor: () => void
}