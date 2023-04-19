import {
  Box,
  Flex,
  Text,
} from '@chakra-ui/react'
import { StarIcon } from '@chakra-ui/icons'
import { Center } from '@chakra-ui/layout'

export interface RatingProps {
  rating: string;
}

const Rating = (props: RatingProps) => {
    
  return (
    <Center mt='40px'>
      <Flex pos='absolute' 
            bottom='0' 
            backgroundColor='white' 
            borderTopLeftRadius='lg' 
            borderTopRightRadius='lg' 
            justify='space-between' 
            align='center' sx={{ alignSelf: 'center'}}>
        <Text color='black' fontSize='14px' p='10px'>
          Trip rating
        </Text>
              <Box display='flex' alignItems='baseline' pr='10px'>
                {Array(5)
                  .fill('')
                  .map((_, i) => (
                    <StarIcon
                    name='star'
                    key={i}
                    color={i < Math.round(parseFloat(props.rating)) ? 'yellow.500' : 'gray.500'}
                    mr='2px'
                  />
                  ))}
                  <Text color='black' fontSize='14px' pl='5px'>{props.rating}</Text>
              </Box>
      </Flex>
    </Center>
  )
}

export default Rating