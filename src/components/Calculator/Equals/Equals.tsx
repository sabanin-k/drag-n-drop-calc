import { Box, Button } from '@chakra-ui/react'

export const Equals = () => {
    return <Box w={'240px'} h={'72px'} p={1} shadow={'md'}>
        <Button
            w={'232px'}
            h={'64px'}
            _focus={{ outline: 'none' }}
        >
            =
        </Button>
    </Box>
}
