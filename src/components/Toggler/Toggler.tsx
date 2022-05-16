import { Flex, Image, Text } from "@chakra-ui/react"
import { FC } from "react"
import blueEye from '../../assets/blueEye.png'
import blackEye from '../../assets/blackEye.png'
import blackVector from '../../assets/darkVector.png'
import blueVector from '../../assets/blueVector.png'

export const Toggler: FC<Props> = ({ toggleToRuntime, toggleToConstructor, isRuntime }) => {
    return (
        <Flex
            w={'240px'}
            p={'1px'}
            bg={'#F3F4F6'}
            borderRadius={'6px'}
        >
            <Flex
                onClick={toggleToRuntime}
                align={'center'}
                justify={'center'}
                gap={2}
                w={'120px'}
                px={4}
                py={2}
                borderRadius={'6px'}
                cursor={isRuntime ? 'default' : 'pointer'}
                bg={isRuntime ? 'white' : 'transparent'}
            >
                <Image src={isRuntime ? blueEye : blackEye} alt="icon" w={'20px'} h={'20px'} />
                <Text fontWeight={'500'} fontSize={'14px'} lineHeight={'15px'} >
                    Runtime
                </Text>
            </Flex>

            <Flex
                onClick={toggleToConstructor}
                align={'center'}
                justify={'center'}
                gap={2}
                w={'120px'}
                px={4}
                py={2}
                bg={isRuntime ? 'transparent' : 'white'}
                cursor={isRuntime ? 'pointer' : 'default'}
                borderRadius={'6px'}
                _focus={{ outline: 'none' }}
            >
                <Image src={isRuntime ? blackVector : blueVector} alt="icon" w={'14px'} h={'10px'} />
                <Text fontWeight={'500'} fontSize={'14px'} lineHeight={'15px'} >
                    Constructor
                </Text>
            </Flex>

        </Flex>
    )
}


interface Props {
    toggleToRuntime: () => void
    toggleToConstructor: () => void
    isRuntime: boolean
}