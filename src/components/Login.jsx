import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Hero from "./Hero";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogin = () => {
    if (username === "joe" && password === "123") {
      setIsLoggedIn(true);
    } else {
      onOpen(); // Open the modal for incorrect credentials
    }
  };

  return (
    <ChakraProvider>
      {isLoggedIn ? (
        <Box>
          <Hero />
        </Box>
      ) : (
        <Box
          w="400px"
          p={4}
          borderWidth="1px"
          borderRadius="lg"
          boxShadow="lg"
          textAlign="center"
          margin="auto"
          mt={20}
        >
          <Heading mb={4}>Login</Heading>
          <FormControl id="username" mb={4}>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" mb={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleLogin}>
            Login
          </Button>
        </Box>
      )}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Incorrect Credentials</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Your username or password is incorrect. Please try again.
          </ModalBody>
        </ModalContent>
      </Modal>
    </ChakraProvider>
  );
};

export default LoginPage;
