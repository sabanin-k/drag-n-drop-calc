import { Box, Button } from '@chakra-ui/react'
import { FC } from 'react'

export const Equals: FC<Props> = ({ displayEquals, isToggled }) => {
    return <Box w={'240px'} h={'72px'} p={1} cursor={!isToggled ? 'move' : 'auto'} >
        <Button
            w={'232px'}
            h={'64px'}
            cursor={!isToggled ? 'move' : 'auto'}
            _focus={{ outline: 'none' }}
            onClick={displayEquals} >
                =
        </Button>
    </Box>
}


interface Props{
    displayEquals: () => void
    isToggled: boolean
}