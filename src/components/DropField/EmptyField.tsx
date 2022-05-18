import { Flex, Text } from '@chakra-ui/react';
import { FC } from 'react';
import dndImage from '../../assets/dragndrop.png';

export const EmptyField: FC<Props> = ({ isPlugDragOver }) => {
    return (
        <Flex
            justify={'center'} align={'center'} gap={2}
            direction={'column'}
            w={'240px'} h={'480px'}
            border={'2px dashed #C4C4C4'}
            backgroundColor={isPlugDragOver ? '#F0F9FF' : 'white'}
        >
            <img src={dndImage} alt="drag icon" />

            <Flex
                justify={'center'} align={'center'} gap={1}
                direction={'column'}
            >
                <Text
                    fontSize={14} fontWeight={500}
                    color={'Highlight'} lineHeight={'17px'}
                >
                    Перетащите сюда
                </Text>

                <Text
                    fontSize={12} fontWeight={400}
                    textAlign={'center'} lineHeight={'15px'}
                >
                    любой элемент<br /> из левой панели
                </Text>
            </Flex>

        </Flex>
    )
}


interface Props {
    isPlugDragOver: boolean
}