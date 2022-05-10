import { Box, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

export const Display: FC<IProps> = ({ value }) => {
  return (
    <Flex justify={'center'} align={'center'} w={'240px'} p={1} shadow={'md'} draggable>
        <Box bg={'#F3F4F6'} fontFamily={'Inter'} fontSize={'3xl'} fontWeight={'bold'} borderRadius={'6px'} w={'100%'} p={2}>
            <Text float={'right'} fontSize={'36px'} fontWeight={'800'} lineHeight={'44px'}>{value ? value : 0}</Text>
        </Box>
    </Flex>
  )
}


interface IProps{
    value: string
}