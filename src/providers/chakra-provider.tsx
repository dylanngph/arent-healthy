import React from 'react'
import { ChakraProvider as _ChakraProvider } from '@chakra-ui/react'
import chakra_theme from '@/config/theme'


const ChakraProvider = ({children}:{children:React.ReactNode}) => {
  return (
    <_ChakraProvider theme={chakra_theme}>
        {children}
    </_ChakraProvider>
  )
}

export default ChakraProvider