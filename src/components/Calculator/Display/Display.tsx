import { Box, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

export const Display: FC<Props> = ({
    displayValue,
    isToggled,
    firstOperand,
    secondOperand,
    operator
}) => {
    return (
        <Flex
            justify={'center'}
            align={'center'}
            w={'240px'}
            p={1}
        >
            <Box
                w={'100%'}
                p={2}
                bg={'#F3F4F6'}
                borderRadius={'6px'}
                overflowX={'hidden'}
            >
                <Text
                    m={0}
                    p={0}
                    fontSize={'12px'}
                >
                    {`${firstOperand || 'Calculator'} ${operator} ${secondOperand}`}
                </Text>
                <Text
                    p={0}
                    float={'right'}
                    fontFamily={'Inter, sans-serif'}
                    lineHeight={'24px'}
                    fontSize={displayValue.length > 14 ? '16px' : '24px'}
                    fontWeight={'800'}
                    opacity={!isToggled ? 0.5 : 1}
                >
                    {displayValue ? displayValue : 0}
                </Text>

            </Box>

        </Flex>
    )
}


interface Props {
    displayValue: string
    isToggled: boolean
    firstOperand: string
    secondOperand: string
    operator: string
}
