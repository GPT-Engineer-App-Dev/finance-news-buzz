import { Container, Text, VStack, Heading, Box, Image, Link, Flex } from "@chakra-ui/react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="2xl" textAlign="center" mb={4}>
            Financial News Today
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Stay updated with the latest financial news and trends.
          </Text>
        </Box>

        <Box>
          <Image src="/images/financial-news.jpg" alt="Financial News" borderRadius="md" boxShadow="md" />
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Latest Articles
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>
                <Link href="#" color="blue.500">
                  Market Analysis: Stocks on the Rise
                </Link>
              </Heading>
              <Text fontSize="sm" color="gray.600">
                By John Doe | September 20, 2023
              </Text>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box p={4} bg="white" borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md" mb={2}>
                <Link href="#" color="blue.500">
                  Cryptocurrency: The Future of Finance?
                </Link>
              </Heading>
              <Text fontSize="sm" color="gray.600">
                By Jane Smith | September 19, 2023
              </Text>
              <Text mt={2}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>

        <Box>
          <Heading as="h2" size="xl" mb={4}>
            Follow Us
          </Heading>
          <Flex justify="center" spacing={4}>
            <Link href="https://twitter.com" isExternal mx={2}>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://facebook.com" isExternal mx={2}>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://linkedin.com" isExternal mx={2}>
              <FaLinkedin size="24px" />
            </Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;