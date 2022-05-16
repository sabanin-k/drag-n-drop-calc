import { Box, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

export const Display: FC<Props> = ({ displayValue, isToggled }) => {
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
                    float={'right'}
                    fontFamily={'Inter, sans-serif'} lineHeight={'44px'}
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
}
