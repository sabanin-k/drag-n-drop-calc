import { Button, Flex } from '@chakra-ui/react'

export const Buttons = () => {
    return (
        <Flex justifyContent={'space-around'} alignItems={'center'} shadow={'md'} p={1} w={'240px'} draggable>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>/</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>x</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>-</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>+</Button>
        </Flex>
    )
}
