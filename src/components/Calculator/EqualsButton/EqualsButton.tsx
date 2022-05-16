import { Box, Button } from '@chakra-ui/react'
import { FC } from 'react'

export const EqualsButton: FC<Props> = ({ displayEquals, isToggled }) => {
    return (
        <Box w={'240px'} h={'72px'} p={1} >
            <Button
                onClick={displayEquals}
                w={'232px'}
                h={'64px'}
                bg={'#5D5FEF'}
                color={'white'}
                _hover={{ bg: '#5D5FEF' }}
                _active={{ bg: '#5D5FEF' }}
                _focus={{ outline: 'none' }}
                cursor={!isToggled ? 'move' : 'pointer'}
            >
                =
            </Button>
        </Box>
    )
}


interface Props {
    displayEquals: () => void
    isToggled: boolean
}