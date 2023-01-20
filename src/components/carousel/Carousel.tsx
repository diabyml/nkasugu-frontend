import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";

interface Props {
  options: any[]
}

const Arrow = ({ children, handler, left, right }) => {
  return (
    <Text
      cursor="pointer"
      pos="absolute"
      top="50%"
      w="auto"
      mt="-22px"
      p="16px"
      color="white"
      fontWeight="bold"
      fontSize="18px"
      transition="0.6s ease"
      borderRadius="0 3px 3px 0"
      userSelect="none"
      _hover={{ opacity: 0.8, bg: "black" }}
      left={left && left}
      right={right && right}
      onClick={handler}
    >
      {children}
    </Text>
  );
};

const Carousel: React.FC<Props> = ({options:slides}) => {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = slides.length;

  const setSlide = (slide) => {
    setCurrentSlide(slide);
  };

  const prevSlide = () => {
    setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1));
  };

  const carouselStyle = {
    transition: "all .5s",
    ml: `-${currentSlide * 100}%`,
  };
  return (
    <Flex
      w="full"
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      alignItems="center"
      justifyContent="center"
      pos="relative"
    >
      <Flex w="full" overflow="hidden" pos="relative">
        <Flex h="400px" w="full" {...carouselStyle}>
          {slides.map((slide, sid) => (
            <Box key={`slide-${sid}`} boxSize="full" shadow="md" flex="none">
              <Text
                color="white"
                fontSize="xs"
                p="8px 12px"
                pos="absolute"
                top="0"
              >
                {sid + 1} / {slidesCount}
              </Text>
              <Image
                src={slide.img}
                alt="carousel image"
                boxSize="full"
                backgroundSize="cover"
              />
            </Box>
          ))}
        </Flex>
        <Arrow left="0" right={null} handler={prevSlide}>
          &#10094;
        </Arrow>
        <Arrow right="0" left={null} handler ={nextSlide}>
          &#10095;
        </Arrow>
      </Flex>
      <HStack justify="center" pos="absolute" bottom="8px" w="full">
        {Array.from({
          length: slidesCount,
        }).map((_, slide) => (
          <Box
            key={`dots-${slide}`}
            cursor="pointer"
            boxSize={["7px", null, "15px"]}
            m="0 2px"
            bg={currentSlide === slide ? "blackAlpha.800" : "blackAlpha.500"}
            rounded="50%"
            display="inline-block"
            transition="background-color 0.6s ease"
            _hover={{
              bg: "blackAlpha.800",
            }}
            onClick={() => setSlide(slide)}
          ></Box>
        ))}
      </HStack>
    </Flex>
  );
};

export default Carousel;
