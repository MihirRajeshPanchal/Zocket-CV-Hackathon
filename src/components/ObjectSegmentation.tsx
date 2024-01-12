import React, { useState } from 'react';
import { Box, Button, Input, VStack, Image } from '@chakra-ui/react';

const ImageUploader = () => {
  const [inputImage, setInputImage] = useState(null);
  const [outputImage, setOutputImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const processImage = async () => {
    if (!inputImage) {
      return;
    }

    try {
      // Convert the data URL to a Blob
      const blob = await fetch(inputImage).then((res) => res.blob());

      // Create a FormData object and append the image file
      const formData = new FormData();
      formData.append('file', blob);

      // Make a POST request to the Flask server
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Get the response as a Blob and convert it to a data URL
        const outputImageBlob = await response.blob();
        const outputImageUrl = URL.createObjectURL(outputImageBlob);
        setOutputImage(outputImageUrl);
      } else {
        console.error('Error processing image:', response.statusText);
      }
    } catch (error) {
      console.error('Error processing image:', error.message);
    }
  };

  return (
    <VStack spacing={4} align="center">
      <Input type="file" onChange={handleImageUpload} accept="image/*" />
      <Button colorScheme="teal" onClick={processImage} disabled={!inputImage}>
        Process Image
      </Button>
      {outputImage && (
        <Box>
          <Image src={outputImage} alt="Output Image" maxH="300px" maxW="300px" />
        </Box>
      )}
    </VStack>
  );
};

export default ImageUploader;
