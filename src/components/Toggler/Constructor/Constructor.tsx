import { Box, Button, Image } from "@chakra-ui/react"
import { FC } from "react"
import blackEye from '../../../assets/blackEye.png'
import blueVector from '../../../assets/blueVector.png'

export const Constructor: FC<Props> = ({ toggleToRuntime }) => {
    return <Box w={'240px'} display={'flex'} gap={2} p={1} bg={'#F3F4F6'} borderRadius={'6px'}>
        <Box onClick={toggleToRuntime} display={'flex'} alignItems={'center'} gap={2} cursor={'pointer'} >
            <Image src={blackEye} alt="" align={'center'} w={'20px'} h={'20px'} />
            Runtime
        </Box>
        <Button display={'flex'} alignItems={'center'} gap={2} bg={'white'} _hover={{ background: 'white' }} _focus={{ outline: 'none' }}>
            <Image src={blueVector} alt="" w={'14px'} h={'10px'} />
            Constructor
        </Button>
    </Box>
}


interface Props{
    toggleToRuntime: () => void
}