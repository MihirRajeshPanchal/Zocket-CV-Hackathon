import {
  Text,
  Center,
} from '@chakra-ui/react'

const ObjectSegmentation = () => {
  return (
    <>
    <Center>
        <Text mt={30} mb={30}>Object Segmentation</Text>
    </Center>
    <div>
        <iframe
            src="https://mihirrajeshpanchal-zocket-hackathon-sam.hf.space"
            width="100%"
            height="450"
            ></iframe>

    </div>
    <Center>
        <Text mt={30} mb={30}>Segment Objects like (Shoe,
Sneaker, Bottle, Cup, Sandal, Perfume, Toy, Sunglasses, Car, Water Bottle, Chair, Office Chair, Can, Cap, Hat,
Couch, Wristwatch, Glass, Bag, Handbag, Baggage, Suitcase, Headphones, Jar, Vase)</Text>
    </Center>
    </>
  )
}

export default ObjectSegmentation