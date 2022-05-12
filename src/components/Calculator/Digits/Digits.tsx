import { Box, Button, Grid } from '@chakra-ui/react';
import { FC } from 'react';

export const Digits: FC<Props> = ({ displayNumber, isToggled }) => {
    const buttons = [] as any[];
    [7, 8, 9, 4, 5, 6, 1, 2, 3].forEach(buttonNumber => {
        buttons.push(
            <Button variant={'outline'} h={12}
                _focus={{ outline: 'none' }}
                value={buttonNumber}
                key={buttonNumber}
                cursor={!isToggled ? 'move' : 'auto'}
                onClick={displayNumber} >
                    {buttonNumber}
            </Button>
        )
    })
    return (
        <Box w={240} p={1} draggable={!isToggled} display={'flex'}
            flexDirection={'column'} gap={2} cursor={!isToggled ? 'move' : 'auto'} >

            <Grid templateColumns='repeat(3, 1fr)' gridGap={2} w={232}>
                {buttons}
            </Grid>

            <Grid templateColumns='repeat(3, 1fr)' gridGap={2}>

                <Button onClick={displayNumber} value='0' variant={'outline'}
                    _focus={{ outline: 'none' }} h={12} cursor={!isToggled ? 'move' : 'auto'}
                    gridColumnStart={1} gridColumnEnd={3} >
                    0
                </Button>

                <Button onClick={displayNumber} value='.' variant={'outline'}
                    _focus={{ outline: 'none' }} h={12} cursor={!isToggled ? 'move' : 'auto'} >
                    ,
                </Button>

            </Grid>

        </Box>
    )
}


interface Props {
    displayNumber: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    isToggled: boolean
}