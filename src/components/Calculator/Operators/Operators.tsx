import { Button, SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';

export const Operators: FC<Props> = ({ setSignHandler, isToggled }) => {
    const buttons = [] as any[];

    ['/', 'x', '-', '+'].forEach(button => {
        buttons.push(<Button 
                        onClick={setSignHandler}
                        variant={'outline'}
                        _focus={{outline: 'none'}}
                        h={12}
                        key={button}
                        value={button}
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


interface Props{
    setSignHandler: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    isToggled: boolean
}