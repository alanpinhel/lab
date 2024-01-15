import { trainOne } from "@/fonts";
import { Box, Image, Stack, Text, Title, rem } from "@mantine/core";

export function Splash() {
  return (
    <>
      <Box
        component="svg"
        fill="none"
        height="185"
        pos="absolute"
        right={0}
        viewBox="0 0 183 185"
        width="183"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="150" cy="35" r="150" fill="var(--mantine-color-yellow-6)" />
      </Box>

      <Stack align="center" justify="center" h="100dvh" gap={0}>
        <Image src="/barbrew.svg" alt="Beer" h="150px" w="auto" />
        <Title
          className={trainOne.className}
          fz={rem(50)}
          order={1}
          tt="uppercase"
        >
          Barbrew
        </Title>
        <Text tt="uppercase" fw={500} fz={rem(20)} lts={8}>
          Beer Cafe
        </Text>
      </Stack>

      <Box
        component="svg"
        fill="none"
        height="228"
        pos="absolute"
        bottom={0}
        viewBox="0 0 284 228"
        width="284"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="34" cy="250" fill="var(--mantine-color-yellow-6)" r="250" />
      </Box>
    </>
  );
}
