import { Button, SimpleGrid } from '@chakra-ui/react';
import { FC } from 'react';

export const Buttons: FC<Props> = ({ displaySign, isToggled }) => {
    const buttons = [] as any[];
    ['/', 'x', '-', '+'].forEach(button => {
        buttons.push(<Button 
                        onClick={displaySign}
                        variant={'outline'}
                        _focus={{outline: 'none'}}
                        h={12}
                        key={button}
                        value={button === 'x'
                                ? '*'
                                : button}
                        >
                            {button}
                    </Button>)
    })

    return (
        <SimpleGrid templateColumns={'repeat(4, 1fr)'} gap={2} p={1} w={'240px'} cursor={!isToggled ? 'pointer' : 'auto'} >
            {buttons}
        </SimpleGrid>
    )
}


interface Props{
    displaySign: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
    isToggled: boolean
}