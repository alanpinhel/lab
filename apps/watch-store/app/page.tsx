"use client";

import { backgroundColor } from "@/theme";
import { Box, Center, Image, rem } from "@mantine/core";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Box bg={backgroundColor} h="100dvh">
      <Box
        animate={{ opacity: 1, y: 0 }}
        component={motion.svg}
        fill="none"
        height="342"
        initial={{ opacity: 0, y: "-100%" }}
        pos="absolute"
        transition={{ bounceDamping: 0, duration: 1 }}
        viewBox="0 0 430 342"
        width="430"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-86.2528"
          y="-447"
          width="682.539"
          height="452.359"
          transform="rotate(40.8279 -86.2528 -447)"
          fill="#F3C981"
        />
      </Box>

      <Center
        animate={{ opacity: 1, rotate: 0 }}
        component={motion.div}
        h="100%"
        initial={{ opacity: 0, rotate: 45 }}
        transition={{ duration: 1 }}
      >
        <Image src="/logo.png" alt="logo" w={rem(240)} />
      </Center>

      <Box
        animate={{ opacity: 1, y: 0 }}
        bottom={0}
        component={motion.svg}
        fill="none"
        height="342"
        initial={{ opacity: 0, y: "100%" }}
        pos="absolute"
        transition={{ bounceDamping: 0, duration: 1 }}
        viewBox="0 0 430 342"
        width="430"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="295.747"
          width="682.539"
          height="452.359"
          transform="rotate(40.8279 295.747 0)"
          fill="#F3C981"
        />
      </Box>
    </Box>
  );
}
