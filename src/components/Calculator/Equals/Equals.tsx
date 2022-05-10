import { Box, Button } from '@chakra-ui/react'
import { FC } from 'react'

export const Equals: FC<Props> = ({ displayEquals, isToggled }) => {
    return <Box w={'240px'} h={'72px'} p={1} shadow={'md'} draggable={!isToggled}>
        <Button
            w={'232px'}
            h={'64px'}
            _focus={{ outline: 'none' }}
            onClick={displayEquals}
            disabled={!isToggled}
        >
            =
        </Button>
    </Box>
}


interface Props{
    displayEquals: () => void
    isToggled: boolean
}