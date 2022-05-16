import { Button, Flex, Grid } from '@chakra-ui/react';
import { FC } from 'react';

export const Digits: FC<Props> = ({ displayNumber, isToggled }) => {

    const buttons = [] as any[];
    [7, 8, 9, 4, 5, 6, 1, 2, 3].forEach(buttonNumber => {
        buttons.push(
            <Button
                onClick={displayNumber}
                key={buttonNumber}
                value={buttonNumber}
                h={12}
                variant={'outline'}
                _focus={{ outline: 'none' }}
                _hover={{bg: 'white'}}
                cursor={isToggled ? 'pointer' : 'move'}
            >
                {buttonNumber}
            </Button>
        )
    })
    return (
        <Flex
            flexDirection={'column'}
            gap={2}
            w={240}
            p={1}
        >
            <Grid templateColumns='repeat(3, 1fr)' gridGap={2} w={232}>
                {buttons}
            </Grid>

            <Grid templateColumns='repeat(3, 1fr)' gridGap={2}>

                <Button
                    onClick={displayNumber}
                    h={12}
                    value='0'
                    variant={'outline'}
                    _focus={{ outline: 'none' }}
                    _hover={{bg: 'white'}}
                    gridColumnStart={1}
                    gridColumnEnd={3}
                    cursor={isToggled ? 'pointer' : 'move'}
                >
                    0
                </Button>

                <Button
                    onClick={displayNumber}
                    h={12}
                    value='.'
                    variant={'outline'}
                    _focus={{ outline: 'none' }}
                    _hover={{bg: 'white'}}
                    cursor={isToggled ? 'pointer' : 'move'}
                >
                    ,
                </Button>

            </Grid>

        </Flex>
    )
}


interface Props {
    displayNumber: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    isToggled: boolean
}