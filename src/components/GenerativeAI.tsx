import React from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Image,
  Text,
  Center,
  Icon,
  useColorModeValue,
  Drawer,
  DrawerContent,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react'

const GenerativeAI = () => {
  return (
    <>
    <Center>
        <Text mt={30} mb={30}>Photoshoot Visuals</Text>
    </Center>
    <div>
        <iframe
            src="https://mihirrajeshpanchal-zocket-hackathon-sam.hf.space"
            width="100%"
            height="450"
            ></iframe>

    </div>
    <Center>
        <Text mt={30} mb={30}>A generative AI model capable of creating realistic and visually appealing product photoshoot visuals.</Text>
    </Center>
    </>
  )
}

export default GenerativeAI