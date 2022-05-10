import { Button, Grid } from '@chakra-ui/react'

export const Numbers = () => {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gridGap={2} w={240} p={1} bg={'white'} boxShadow={'md'} draggable>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>7</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>8</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>9</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>4</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>5</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>6</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>1</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>2</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>3</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12} gridColumnStart={1} gridColumnEnd={3}>0</Button>
            <Button variant={'outline'} _focus={{outline: 'none'}} h={12}>,</Button>
        </Grid>
    )
}
