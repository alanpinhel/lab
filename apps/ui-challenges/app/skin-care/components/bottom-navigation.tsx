import {
  Box,
  Button,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  rem,
} from "@mantine/core";
import {
  IconCategory,
  IconEye,
  IconHome,
  IconUserCircle,
} from "@tabler/icons-react";

export function BottomNavigation() {
  return (
    <Box pos="fixed" bottom={0} left={0} right={0}>
      <Container size="xs" p={0}>
        <Paper radius="md" h={rem(80)}>
          <Group justify="space-evenly" align="center" h="100%">
            <Button w={rem(76)} size="lg" variant="white" c="#020953" p={0}>
              <Stack gap={rem(4)} align="center">
                <IconHome stroke={1.5} />
                <Text tt="uppercase" fz={rem(9)} lts={0.9} fw={700}>
                  home
                </Text>
              </Stack>
            </Button>

            <Button w={rem(76)} size="lg" variant="white" c="#020953" p={0}>
              <Stack gap={rem(4)} align="center">
                <IconCategory stroke={1.5} />
                <Text tt="uppercase" fz={rem(9)} lts={0.9} fw={700}>
                  products
                </Text>
              </Stack>
            </Button>

            <Button w={rem(76)} size="lg" variant="white" c="#020953" p={0}>
              <Stack gap={rem(4)} align="center">
                <IconEye stroke={1.5} />
                <Text tt="uppercase" fz={rem(9)} lts={0.9} fw={700}>
                  wishlist
                </Text>
              </Stack>
            </Button>

            <Button w={rem(76)} size="lg" variant="white" c="#020953" p={0}>
              <Stack gap={rem(4)} align="center">
                <IconUserCircle stroke={1.5} />
                <Text tt="uppercase" fz={rem(9)} lts={0.9} fw={700}>
                  account
                </Text>
              </Stack>
            </Button>
          </Group>
        </Paper>
      </Container>
    </Box>
  );
}
