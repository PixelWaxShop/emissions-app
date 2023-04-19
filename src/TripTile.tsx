import {
  Box,
  Text,
  Heading
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { SimpleGrid, Flex, Center } from '@chakra-ui/layout'
import EmissionsOffset from './EmissionsOffset'
import Rating from './Rating'

const TripTile = () => {
    const [trips, setTrips] = useState([])

  const fetchData = () => {
    fetch('https://my-json-server.typicode.com/PixelWaxShop/emissions-app/trips')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setTrips(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Center>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing='30px' p='5' maxWidth='1020px'>
        {trips.map((item: any) => {
          return (
          <Box  className = 'tile' 
                minWidth='160px'
                minHeight='125px' 
                backgroundImage={item.img_url}  
                p='40px'
                borderWidth='10px' 
                borderRadius='20px' 
                borderColor='white'
                dropShadow='dark-lg'
                overflow='hidden' 
                key={item.id}
                boxShadow='2xl'
                sx={{ boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.5)', 
                      filter: 'drop-shadow(6px 6px 12px gray)', 
                      backgroundSize: 'cover' }}>

            <Flex direction='column' align='center' justify='center' mb='10px'>
              <Heading color='white' fontSize='21px' noOfLines={1}>{item.title}</Heading>
              <Text fontSize='12px' color='white' p='1'>{item.countries} countries, {item.days} days</Text>
            </Flex>
            <EmissionsOffset co2Offset={item.co2_offset}></EmissionsOffset>
            <Rating rating={item.rating}></Rating>
          
        </Box>
          
          )
        })}
      </SimpleGrid>
    </Center>
    
  )
}

export default TripTile