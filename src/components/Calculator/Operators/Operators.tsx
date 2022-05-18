import { FC } from 'react';
import { Button, SimpleGrid } from '@chakra-ui/react';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { useAppSelector } from '../../../hooks/useAppSelector';
import { setOperator } from '../../../store/reducers/runtimeSlice';
import { getRuntimeToggler } from '../../../store/selectors/appSelector';

export const Operators: FC = () => {
    const dispatch = useAppDispatch()
    const isRuntime = useAppSelector(getRuntimeToggler)

    const setOperatorHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        isRuntime && dispatch(setOperator(e.currentTarget.value))
    }

    const buttons = [] as JSX.Element[];

    ['/', 'x', '-', '+'].forEach(button => {
        buttons.push(<Button 
                        onClick={setOperatorHandler}
                        key={button}
                        value={button}
                        h={12}
                        variant={'outline'}
                        _hover={{bg: 'white'}}
                        _focus={{outline: 'none'}}
                        cursor={isRuntime ? 'pointer' : 'move'}
                        >
                            {button}
                    </Button>)
    })

    return (
        <SimpleGrid templateColumns={'repeat(4, 1fr)'} gap={2} p={1} w={'240px'} >
            {buttons}
        </SimpleGrid>
    )
}
