import { Box, Button, Image } from '@chakra-ui/react'
import blackEye from '../../assets/blackEye.png'
import blueEye from '../../assets/blueEye.png'
import darkVector from '../../assets/darkVector.png'
import blueVector from '../../assets/blueVector.png'
import { useState } from 'react'

export const Toggler = () => {
    const [isRun, setRun] = useState(false)

    return !isRun
        ? <Box w={'240px'} display={'flex'} gap={2} p={1} bg={'#F3F4F6'} borderRadius={'6px'}>
            <Box onClick={() => setRun(true)} display={'flex'} alignItems={'center'} gap={2} cursor={'pointer'} >
                <Image src={blackEye} alt="" align={'center'} w={'20px'} h={'20px'} />
                Runtime
            </Box>
            <Button display={'flex'} alignItems={'center'} gap={2} bg={'white'} _hover={{ background: 'white' }} _focus={{outline: 'none'}}>
                <Image src={blueVector} alt="" w={'14px'} h={'10px'} />
                Constructor
            </Button>
        </Box>
        : <Box w={'240px'} display={'flex'} gap={2} p={1} bg={'#F3F4F6'} borderRadius={'6px'}>
            <Button display={'flex'} alignItems={'center'} gap={2} bg={'white'} _hover={{ background: 'white' }} _focus={{outline: 'none'}}>
                <Image src={blueEye} alt="" w={'20px'} h={'20px'} />
                Runtime
            </Button>
            <Box onClick={() => setRun(false)}  display={'flex'} alignItems={'center'} gap={2} cursor={'pointer'} >
                <Image src={darkVector} alt="" align={'center'} w={'14px'} h={'10px'} />
                Constructor
            </Box>
        </Box>
}
