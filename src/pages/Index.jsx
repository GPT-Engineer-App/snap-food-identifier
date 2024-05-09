import { Box, Button, Container, Flex, IconButton, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { FaCamera, FaCog, FaHome, FaSearch, FaUser } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW="container.md" p={0} height="100vh">
      <Flex direction="column" height="100%">
        {/* Header */}
        <Flex align="center" justify="space-between" p={4} boxShadow="sm">
          <Image src="https://images.unsplash.com/photo-1497005367839-6e852de72767?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzaW1wbGUlMjBsb2dvfGVufDB8fHx8MTcxNTI4ODUwMXww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="40px" />
          <IconButton icon={<FaCog />} aria-label="Settings" size="lg" />
        </Flex>

        {/* Main Function Area */}
        <Flex flex={1} direction="column" align="center" justify="center">
          <IconButton icon={<FaCamera />} aria-label="Upload Photo" size="lg" colorScheme="blue" onClick={onOpen} borderRadius="full" p={8} />
        </Flex>

        {/* Footer */}
        <Flex align="center" justify="space-around" p={4}>
          <IconButton icon={<FaHome />} aria-label="Home" size="lg" />
          <IconButton icon={<FaSearch />} aria-label="Discover" size="lg" />
          <IconButton icon={<FaUser />} aria-label="Profile" size="lg" />
        </Flex>
      </Flex>

      {/* Ingredient Analysis Modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ingredient Analysis</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Text fontSize="md" color="gray.600">
                Ingredient 1
              </Text>
              <Text fontSize="md" color="gray.600">
                Ingredient 2
              </Text>
              <Text fontSize="md" color="gray.600">
                Ingredient 3
              </Text>
              <Button colorScheme="blue">More Details</Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;
