import React from 'react'
import {
  Box,
  Container,
  Text,
  Stack
} from '@chakra-ui/react'
import styled from '@emotion/styled'
import { FOOTER_NAVIGATION } from '@/config/navigation'


const Wrapper = styled(Box)`
  width: 100%;
  min-height: 128px;
`


const Footer = () => {
  return (
    <Wrapper bg='dark.500' py={6} px={5}>
      <Container maxW='container.lg' px={0} h='full' minH='inherit'>
        <Stack
          w='full'
          h='full'
          direction={{base: 'column', lg: 'row'}}
          alignItems='center'
          gap='45px'
          minH='inherit'
        >
          {
            FOOTER_NAVIGATION.map((nav, index) => (
              <Box
                key={index}
                cursor='pointer'
                color='white'
                transition='all .2s ease-in-out'
                _hover={{
                  textDecoration: 'underline',
                  color: 'primary.300'
                }}
              >
                <Text
                  as='h4'
                  color='inherit'
                  fontSize={11}
                  fontWeight={300}
                >
                  {nav.title}
                </Text>
              </Box>
            ))
          }
        </Stack>
      </Container>
    </Wrapper>
  )
}

export default Footer