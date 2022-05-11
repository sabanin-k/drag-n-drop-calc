import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import dndImage from '../../assets/dragndrop.png';


export const DropField: FC<IProps> = ({ dragOver, fieldArray }) => {

    return fieldArray.length === 0
        ? <Flex justify={'center'}
            gap={2} align={'center'}
            w={'240px'} h={'480px'}
            direction={'column'}
            border={'2px dashed #C4C4C4'}
            backgroundColor={dragOver ? '#F0F9FF' : 'white'}>
            <img src={dndImage} alt="dnd" />
            <Flex justify={'center'} align={'center'} direction={'column'} gap={1}>
                <Text fontSize={14} fontWeight={500} color={'Highlight'} lineHeight={'17px'}>Перетащите сюда</Text>
                <Text fontSize={12} fontWeight={400} textAlign={'center'} lineHeight={'15px'}>любой элемент<br /> из левой панели</Text>
            </Flex>
        </Flex>
        : <Flex direction={'column'} h={'480px'} gap={4} >
            {fieldArray.map(arr => arr)}
        </Flex>
}


interface IProps {
    dragOver: boolean
    fieldArray: any[]
}