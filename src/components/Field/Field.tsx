import { Flex, Text } from '@chakra-ui/react'
import image from '../../assets/dragndrop.png'

export const Field = () => {
  return <Flex justify={'center'} gap={2} align={'center'} w={'240px'} h={'480px'} direction={'column'} border={'2px dashed #C4C4C4'}>
      <img src={image} alt="dnd" />
      <Flex justify={'center'} align={'center'} direction={'column'} gap={1}>
        <Text fontSize={14} fontWeight={500} color={'Highlight'} lineHeight={'17px'}>Перетащите сюда</Text>
        <Text fontSize={12} fontWeight={400} textAlign={'center'} lineHeight={'15px'}>любой элемент<br/> из левой панели</Text>
      </Flex>
  </Flex>
}
