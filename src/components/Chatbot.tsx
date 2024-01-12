import {
  Text,
  Center,
} from '@chakra-ui/react'

const GenerativeAI = () => {
  return (
    <>
    <Center>
        <Text mt={30} mb={30}>AI Photoshoot Assistant Chatbot</Text>
    </Center>
    <div>
        <iframe
            src="https://mihirrajeshpanchal-zocket-hackathon-genai.hf.space"
            width="100%"
            height="600"
            ></iframe>

    </div>
    </>
  )
}

export default GenerativeAI