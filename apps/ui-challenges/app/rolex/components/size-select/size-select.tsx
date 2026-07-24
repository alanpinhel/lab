"use client";

import { Carousel, Embla } from "@mantine/carousel";
import { Box, Center, Stack, Text } from "@mantine/core";
import { useCallback, useEffect, useState } from "react";

const sizes = [39, 40, 41, 42, 43, 44];

export function SizeSelect() {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleScroll = useCallback(() => {
    if (embla) {
      setCurrentIndex(embla?.selectedScrollSnap());
    }
  }, [embla, setCurrentIndex]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  const isActive = (index: number) => currentIndex === index;

  return (
    <>
      <Carousel
        loop
        align="center"
        getEmblaApi={setEmbla}
        includeGapInSize={false}
        slideGap="md"
        slideSize="33.333333%"
        slidesToScroll={1}
        withControls={false}
        w="100%"
        style={{
          borderBottom: "1px solid",
          borderImageSlice: 1,
          borderImageSource: "linear-gradient(to left, #000, #fff, #000)",
        }}
      >
        {sizes.map((size, i) => (
          <Carousel.Slide key={size}>
            {isActive(i) ? (
              <Center pos="relative" w={108} h={108}>
                <Stack
                  pos="relative"
                  align="center"
                  gap={0}
                  h={80}
                  justify="center"
                  w={80}
                  style={{
                    borderRadius: "50%",
                    border: "2px solid var(--mantine-color-blue-6)",
                  }}
                >
                  <Text fz={40} lh={1}>
                    {size}
                  </Text>

                  <Stack align="center" pos="absolute" gap={4} bottom={6}>
                    <Text fz={10} lh={1} c="blue">
                      mm
                    </Text>
                    <Box
                      bg="blue"
                      h={4}
                      style={{ borderRadius: "50%" }}
                      w={4}
                    />
                  </Stack>
                </Stack>
                <Box pos="absolute" w={1} h={8} bg="blue.6" bottom={8} />
              </Center>
            ) : (
              <Center pos="relative" w={108} h={108}>
                <Text fz={10} lh={1} c="white" opacity={0.6}>
                  {size}mm
                </Text>
                <Box
                  pos="absolute"
                  w={1}
                  h={8}
                  bg="white"
                  opacity={0.1}
                  bottom={8}
                />
              </Center>
            )}
          </Carousel.Slide>
        ))}
      </Carousel>
    </>
  );
}
