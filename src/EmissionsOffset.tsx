import * as React from 'react'
import {
  Flex,
  Text,
} from '@chakra-ui/react'

export interface EmissionsOffsetProps {
  co2Offset: string;
}

const EmissionsOffset = (props: EmissionsOffsetProps) => {
    
  return (
      <Flex backgroundColor='#1f2837' p='10px' borderRadius='8px' justify='space-between' >
        <Text fontSize='13px' color='white'>Emissions offset: </Text><Text fontSize='13px' color='white'>{props.co2Offset}</Text>
      </Flex>
  )
}

export default EmissionsOffset