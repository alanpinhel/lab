import { Center, Container } from "@mantine/core";
import { SizeSelect } from "../components/size-select";

export default function RolexDetailPage() {
  return (
    <Container
      bg="#090b18"
      bgp="center"
      bgr="no-repeat"
      bgsz="cover"
      c="white"
      maw={390}
      mih="100dvh"
      h="100dvh"
      px={32}
      py={44}
      size="xs"
    >
      <Center h="100%">
        <SizeSelect />
      </Center>
    </Container>
  );
}
