import { Button, Flex } from '@chakra-ui/react'
import { FC } from 'react'

export const Buttons: FC<Props> = ({ displaySign }) => {
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
                                : button} >
                            {button}
                    </Button>)
    })
    return (
        <Flex justifyContent={'space-around'} alignItems={'center'} shadow={'md'} p={1} w={'240px'} draggable>
            {buttons}
        </Flex>
    )
}


interface Props{
    displaySign: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}