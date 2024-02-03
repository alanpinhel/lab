"use client";

import {
  Box,
  Center,
  Container,
  Image,
  rem,
} from "@mantine/core";
import { motion } from "framer-motion";
import Link from "next/link";
import { backgroundColor } from "./theme";

export default function Home() {
  return (
    <Box bg={backgroundColor} h="100dvh">
      <Container px={0} pos="relative" size="xs" h="100%">
        <Box
          animate={{ opacity: 1, y: 0 }}
          component={motion.svg}
          fill="none"
          height="342"
          top={0}
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
            fill="#f3c981"
          />
        </Box>

        <Box
          animate={{ opacity: 1, y: 0 }}
          bottom={0}
          component={motion.svg}
          fill="none"
          height="342"
          initial={{ opacity: 0, y: "100%" }}
          pos="absolute"
          right={0}
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
            fill="#f3c981"
          />
        </Box>

        <Center
          animate={{ opacity: 1, rotate: 0 }}
          component={motion.div}
          h="100%"
          initial={{ opacity: 0, rotate: 45 }}
          pos="relative"
          transition={{ duration: 1 }}
        >
          <Link href="/watch-store/list">
            <Image
              src="/watch-store/logo.png"
              alt="logo"
              w={rem(240)}
            />
          </Link>
        </Center>
      </Container>
    </Box>
  );
}
