import { Container, VStack, Heading, Text, Button, Image } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" p={8}>
      <VStack spacing={8} align="center">
        <Image src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNvZnR3YXJlfGVufDB8fHx8MTcxNTQ3MjY5M3ww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="200px" objectFit="cover" borderRadius="full" alt="Cloud Software" />
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to OrthoStream
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Revolutionizing orthodontic practice management through seamless, cloud-based solutions.
        </Text>
        <Button rightIcon={<FaRocket />} colorScheme="teal" size="lg">
          Get Started
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
