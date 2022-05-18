import { FC } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getRuntimeToggler } from '../../../store/selectors/appSelector'
import { getDropped, getOperator, getValue, getX, getY } from '../../../store/selectors/displaySelector'

export const Display: FC = () => {
    const firstOperand = useAppSelector(getX)
    const secondOperand = useAppSelector(getY)
    const operator = useAppSelector(getOperator)
    const value = useAppSelector(getValue)
    const isToggled = useAppSelector(getRuntimeToggler)
    const isDropped = useAppSelector(getDropped)

    const displayValue = isDropped ? '0' : value

    return (
        <Flex
            justify={'center'} align={'center'}
            w={'240px'} p={1}
        >
            <Box
                w={'100%'} p={2}
                bg={'#F3F4F6'} borderRadius={'6px'}
                overflowX={'hidden'}
            >
                <Text  /* mini display */
                    m={0} p={0}
                    fontSize={'12px'}
                >
                    {`${firstOperand || 'Construlator'} ${operator} ${secondOperand}`}
                </Text>

                <Text  /* main display */
                    p={0}
                    float={'right'}
                    fontFamily={'Inter, sans-serif'}
                    fontSize={displayValue.length > 14 ? '16px' : '24px'}
                    fontWeight={'800'} lineHeight={'24px'}
                    opacity={!isToggled ? 0.5 : 1}
                >
                    {displayValue ? displayValue : 0}
                </Text>

            </Box>

        </Flex>
    )
}
