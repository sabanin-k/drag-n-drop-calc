import { FC } from 'react';
import { Button, Flex, Grid } from '@chakra-ui/react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { setNumber } from '../../../store/reducers/runtimeSlice';
import { getRuntimeToggler } from '../../../store/selectors/appSelector';

export const Digits: FC = () => {
    const dispatch = useAppDispatch()
    const isRuntime = useAppSelector(getRuntimeToggler)

    const setNumberHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isRuntime && dispatch(setNumber(e.currentTarget.value))
    }

    const buttons = [] as JSX.Element[]
    
    [7, 8, 9, 4, 5, 6, 1, 2, 3].forEach(buttonNumber => {
        buttons.push(
            <Button
                onClick={setNumberHandler}
                key={buttonNumber}
                value={buttonNumber}
                h={12}
                variant={'outline'}
                _focus={{ outline: 'none' }}
                _hover={{bg: 'white'}}
                cursor={isRuntime ? 'pointer' : 'move'}
            >
                {buttonNumber}
            </Button>
        )
    })

    return (
        <Flex
            direction={'column'} gap={2}
            w={240} p={1}
        >
            <Grid templateColumns='repeat(3, 1fr)' gridGap={2} w={232}>
                {buttons}
            </Grid>

            <Grid templateColumns='repeat(3, 1fr)' gridGap={2}>

                <Button
                    onClick={setNumberHandler}
                    h={12}
                    value='0'
                    variant={'outline'}
                    _focus={{ outline: 'none' }}
                    _hover={{bg: 'white'}}
                    gridColumnStart={1}
                    gridColumnEnd={3}
                    cursor={isRuntime ? 'pointer' : 'move'}
                >
                    0
                </Button>

                <Button
                    onClick={setNumberHandler}
                    h={12}
                    value='.'
                    variant={'outline'}
                    _focus={{ outline: 'none' }}
                    _hover={{bg: 'white'}}
                    cursor={isRuntime ? 'pointer' : 'move'}
                >
                    ,
                </Button>

            </Grid>

        </Flex>
    )
}
