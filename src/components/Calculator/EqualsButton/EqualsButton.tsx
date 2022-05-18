import { FC } from 'react'
import { Box, Button } from '@chakra-ui/react'
import { useAppDispatch } from '../../../hooks/useAppDispatch'
import { useAppSelector } from '../../../hooks/useAppSelector'
import { getEquals } from '../../../store/reducers/runtimeSlice'
import { getRuntimeToggler } from '../../../store/selectors/appSelector'

export const EqualsButton: FC = () => {
    const dispatch = useAppDispatch()
    const isRuntime = useAppSelector(getRuntimeToggler)

    const displayEqualsHandler = () => {
        isRuntime && dispatch(getEquals())
    }

    return (
        <Box w={'240px'} h={'72px'} p={1} >
            <Button
                onClick={displayEqualsHandler}
                w={'232px'} h={'64px'}
                bg={'#5D5FEF'} color={'white'}
                _hover={{ bg: '#5D5FEF' }}
                _active={{ bg: '#5D5FEF' }}
                _focus={{ outline: 'none' }}
                cursor={isRuntime ? 'pointer' : 'move'}
            >
                =
            </Button>
        </Box>
    )
}
