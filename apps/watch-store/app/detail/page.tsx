"use client";

import { khand } from "@/fonts";
import { backgroundColor, primaryColor } from "@/theme";
import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import {
  IconArrowNarrowLeft,
  IconChevronDown,
  IconChevronUp,
  IconHeartFilled,
  IconSearch,
  IconShoppingCart,
} from "@tabler/icons-react";

import { useDisclosure } from "@mantine/hooks";

export default function DetailPage() {
  const [isFavorite, { toggle }] = useDisclosure();

  return (
    <Box
      bg={backgroundColor}
      mih="100dvh"
      c="white"
      miw={430}
    >
      <Container pos="relative" size="xs" px="lg" py={40}>
        <Box
          component="svg"
          fill="none"
          height="496"
          pos="absolute"
          right={0}
          top={0}
          viewBox="0 0 199 496"
          width="199"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H199V496H130.8C58.5612 496 0 437.439 0 365.2V0Z"
            fill="#F3C981"
          />
          <path
            d="M188.164 475.692L199 475.692L199 480.732L170.23 480.732L170.23 472.248C170.23 469.98 170.79 468.23 171.91 466.998C173.002 465.738 174.57 465.108 176.614 465.108L181.528 465.108C184.776 465.108 186.82 466.284 187.66 468.636L199 464.1L199 469.644L188.164 473.634L188.164 475.692ZM174.556 475.692L184.09 475.692L184.09 472.752C184.09 471.828 183.894 471.17 183.502 470.778C183.082 470.358 182.41 470.148 181.486 470.148L176.992 470.148C175.368 470.148 174.556 471.016 174.556 472.752L174.556 475.692ZM170.23 450.841L170.23 437.023L174.64 437.023L174.64 445.801L182.242 445.801L182.242 438.199L186.652 438.199L186.652 445.801L194.59 445.801L194.59 437.023L199 437.023L199 450.841L170.23 450.841ZM170.23 411.987L170.23 406.737L199 412.491L199 419.547L170.23 425.385L170.23 420.219L183.166 417.783C184.594 417.531 186.764 417.195 189.676 416.775C192.588 416.327 194.198 416.061 194.506 415.977C193.974 415.865 192.224 415.599 189.256 415.179C186.288 414.759 184.272 414.465 183.208 414.297L170.23 411.987ZM170.23 383.093L170.23 378.053L192.238 378.052C194.422 378.052 196.172 378.738 197.488 380.11C198.776 381.482 199.42 383.512 199.42 386.2C199.42 388.86 198.776 390.876 197.488 392.249C196.172 393.593 194.422 394.265 192.238 394.265L170.23 394.265L170.23 389.225L191.986 389.224C193.89 389.224 194.842 388.202 194.842 386.158C194.842 384.114 193.89 383.092 191.986 383.092L170.23 383.093ZM170.23 363.631L170.23 349.813L174.64 349.813L174.64 358.591L182.242 358.591L182.242 350.989L186.652 350.989L186.652 358.591L194.59 358.591L194.59 349.813L199 349.813L199 363.631L170.23 363.631ZM170.23 304.552L174.64 304.552L174.64 309.886L199 309.886L199 314.968L174.64 314.968L174.64 320.302L170.23 320.302L170.23 304.552ZM170.23 279.828L170.23 274.704L199 274.704L199 279.828L187.114 279.828L187.114 286.842L199 286.842L199 291.924L170.23 291.924L170.23 286.842L182.62 286.842L182.62 279.828L170.23 279.828ZM177.244 249.228C175.34 249.228 174.388 250.278 174.388 252.378C174.388 254.45 175.34 255.486 177.244 255.486L191.986 255.486C193.89 255.486 194.842 254.45 194.842 252.378C194.842 250.278 193.89 249.228 191.986 249.228L177.244 249.228ZM176.992 260.526C174.808 260.526 173.072 259.84 171.784 258.468C170.468 257.096 169.81 255.066 169.81 252.378C169.81 249.69 170.468 247.66 171.784 246.288C173.072 244.888 174.808 244.188 176.992 244.188L192.238 244.188C194.422 244.188 196.172 244.888 197.488 246.288C198.776 247.66 199.42 249.69 199.42 252.378C199.42 255.066 198.776 257.096 197.488 258.468C196.172 259.84 194.422 260.526 192.238 260.526L176.992 260.526ZM170.23 207.876L199 207.876L199 212.748L187.072 212.748C184.244 212.748 181.402 212.552 178.546 212.16L191.566 216.864L191.566 221.064L178.546 225.81C181.15 225.39 183.992 225.18 187.072 225.18L199 225.18L199 230.01L170.23 230.01L170.23 224.634L186.19 218.964L170.23 213.294L170.23 207.876ZM170.23 171.136L199 171.136L199 176.008L187.072 176.008C184.244 176.008 181.402 175.812 178.546 175.42L191.566 180.124L191.566 184.324L178.546 189.07C181.15 188.65 183.992 188.44 187.072 188.44L199 188.44L199 193.27L170.23 193.27L170.23 187.894L186.19 182.224L170.23 176.554L170.23 171.136ZM170.23 156.53L170.23 142.712L174.64 142.712L174.64 151.49L182.242 151.49L182.242 143.888L186.652 143.888L186.652 151.49L194.59 151.49L194.59 142.712L199 142.712L199 156.53L170.23 156.53ZM199 119.313L199 124.395L189.76 124.395L170.23 131.325L170.23 126.159L175.858 124.227C179.022 123.191 181.878 122.379 184.426 121.791C181.598 121.091 178.728 120.279 175.816 119.355L170.23 117.465L170.23 112.383L189.76 119.313L199 119.313Z"
            fill="black"
            fillOpacity="0.2"
          />
        </Box>

        <Group justify="space-between">
          <ActionIcon
            color={primaryColor}
            size="lg"
            variant="transparent"
          >
            <IconArrowNarrowLeft size={30} />
          </ActionIcon>

          <Group>
            <ActionIcon
              color="white"
              size="lg"
              variant="transparent"
            >
              <IconSearch size={30} />
            </ActionIcon>
            <ActionIcon
              color="white"
              size="lg"
              variant="transparent"
            >
              <IconShoppingCart size={30} />
            </ActionIcon>
          </Group>
        </Group>

        <Group
          align="stretch"
          justify="stretch"
          mt="xl"
          pos="relative"
          wrap="nowrap"
        >
          <Stack>
            <ActionIcon
              color="white"
              size="sm"
              style={{ alignSelf: "center" }}
              variant="transparent"
            >
              <IconChevronUp />
            </ActionIcon>

            <Stack gap={0}>
              <Text
                c={primaryColor}
                className={khand.className}
                fw={600}
                fz={15}
                lts={3.6}
                tt="uppercase"
              >
                brand
              </Text>
              <Text
                className={khand.className}
                fw={600}
                fz={20}
                lts={4.8}
                tt="uppercase"
              >
                revue thommey
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text
                c={primaryColor}
                className={khand.className}
                fw={600}
                fz={15}
                lts={3.6}
                tt="uppercase"
              >
                strap
              </Text>
              <Text
                className={khand.className}
                fw={600}
                fz={20}
                lts={4.8}
                tt="uppercase"
              >
                silicone
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text
                c={primaryColor}
                className={khand.className}
                fw={600}
                fz={15}
                lts={3.6}
                tt="uppercase"
              >
                color
              </Text>
              <Text
                className={khand.className}
                fw={600}
                fz={20}
                lts={4.8}
                tt="uppercase"
              >
                green
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text
                c={primaryColor}
                className={khand.className}
                fw={600}
                fz={15}
                lts={3.6}
                tt="uppercase"
              >
                warranty
              </Text>
              <Text
                className={khand.className}
                fw={600}
                fz={20}
                lts={4.8}
                tt="uppercase"
              >
                2 years
              </Text>
            </Stack>

            <ActionIcon
              color="white"
              size="sm"
              style={{ alignSelf: "center" }}
              variant="transparent"
            >
              <IconChevronDown />
            </ActionIcon>
          </Stack>

          <Group
            justify="flex-end"
            pos="relative"
            style={{ flex: 1 }}
          >
            <Image
              pos="absolute"
              left={-49}
              top={36}
              src="/thommen.png"
              w={230}
            />
          </Group>
        </Group>

        <Stack mt={80} gap="xs">
          <Group justify="space-between">
            <Stack gap={0}>
              <Text
                c={primaryColor}
                fz={15}
                lts={3.6}
                fw={600}
                tt="uppercase"
              >
                trending products
              </Text>
              <Text fw={500} fz={30}>
                Thommen Watches
              </Text>
            </Stack>

            <Stack gap={0}>
              <Text
                c={primaryColor}
                fw={600}
                fz={15}
                lts={3.6}
                tt="uppercase"
              >
                price
              </Text>
              <Text
                c={primaryColor}
                fw={500}
                fz={32}
                tt="uppercase"
              >
                $250
              </Text>
            </Stack>
          </Group>

          <Text c="#C9C9C9" fz={20}>
            Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation
            ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </Text>
        </Stack>

        <Group mt={35} gap="xl">
          <Button
            c={backgroundColor}
            color={primaryColor}
            radius="md"
            size="lg"
            style={{ flex: 1 }}
            tt="uppercase"
          >
            Add to cart
          </Button>
          <ActionIcon
            c={isFavorite ? "red" : "white"}
            color={primaryColor}
            onClick={toggle}
            radius="md"
            size={50}
          >
            <IconHeartFilled size={32} />
          </ActionIcon>
        </Group>
      </Container>
    </Box>
  );
}
