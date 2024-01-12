import {
  Text,
  Center,
} from '@chakra-ui/react'

const GenerativeAI = () => {
  return (
    <>
    <Center>
        <Text mt={30} mb={30}>Photoshoot Visuals</Text>
    </Center>
    <div>
        <iframe
            src="https://stabilityai-stable-diffusion.hf.space"
            width="100%"
            height="550"
            ></iframe>

    </div>
    <Center>
        <Text mt={30} mb={30}>A generative AI model capable of creating realistic and visually appealing product photoshoot visuals.</Text>
    </Center>
    </>
  )
}

export default GenerativeAI