import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react'
import TripTile from './TripTile';

export const App = () => (
  <ChakraProvider theme={theme}>
        <TripTile></TripTile>
  </ChakraProvider>
)





