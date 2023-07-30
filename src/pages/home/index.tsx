import React from 'react'
import HeroSection from './components/hero'
import {
    VStack
} from '@chakra-ui/react'
import MainSection from './components/main-section'


const HomePage = () => {
  
  return (
    <VStack w='full' align='start' spacing='24px'>
        <HeroSection />
        <MainSection/>
    </VStack>
  )
}

export default HomePage