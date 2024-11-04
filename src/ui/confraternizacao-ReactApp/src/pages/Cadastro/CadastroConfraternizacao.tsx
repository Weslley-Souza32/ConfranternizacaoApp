import {
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  Heading,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Header } from "../../Components/Header/Header";
import { MenuSideBar } from "../../Components/MenuSideBar/MenuSideBar";
import { RiAddLine, RiDeleteBin3Line, RiEditLine } from "react-icons/ri";
import { Input } from "../../Components/Input/Input";

export const CadastroConfraternizacao: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1580} px="6">
        <MenuSideBar />

        <Box flex="1" borderRadius={5} bg="gray.900" p={8}>
          <Flex mb="8" align="center">
            <Heading size="lg" fontWeight="normal">
              Cadastro de Confraternização
            </Heading>
            <HStack ml="auto">
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiAddLine} />}
                onClick={onOpen}
              >
                Criar
              </Button>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiEditLine} />}
              >
                Editar
              </Button>
              <Button
                size="sm"
                fontSize="sm"
                colorScheme="blue"
                leftIcon={<Icon as={RiDeleteBin3Line} />}
              >
                Excluir
              </Button>
            </HStack>
          </Flex>
          <Box>
            <TableContainer width="100%">
              <Table variant="simple">
                <TableCaption>Confraternização</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Código</Th>
                    <Th>Nome</Th>
                    <Th isNumeric>Data</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>C0019</Td>
                    <Td>Confraternização classe 1</Td>
                    <Td isNumeric>30/10/2024</Td>
                  </Tr>
                  <Tr>
                    <Td>C0020</Td>
                    <Td>Confraternização classe 2</Td>
                    <Td isNumeric>20/11/2024</Td>
                  </Tr>
                  <Tr>
                    <Td>C0021</Td>
                    <Td>Confraternização classe 3</Td>
                    <Td isNumeric>30/10/2024</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>Código</Th>
                    <Th>Nome</Th>
                    <Th isNumeric>Data</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent mt="140">
          <ModalHeader color="blue.200" bg="gray.700">
            Criar Confraternização
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} bg="blue.900">
            <Flex gap={5}>
              <FormControl>
                <Input id="name" name="name" label="First Name" type="text" />
              </FormControl>
              <FormControl>
                <Input
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={5}>
              <FormControl>
                <Input id="name" name="name" label="First Name" type="text" />
              </FormControl>
              <FormControl>
                <Input
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={5}>
              <FormControl>
                <Input id="name" name="name" label="First Name" type="text" />
              </FormControl>
              <FormControl>
                <Input
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  type="text"
                />
              </FormControl>
            </Flex>
            <Flex gap={5}>
              <FormControl>
                <Input id="name" name="name" label="First Name" type="text" />
              </FormControl>
              <FormControl>
                <Input
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  type="text"
                />
              </FormControl>
            </Flex>
          </ModalBody>
          <ModalFooter bg="gray.700">
            <Button colorScheme="blue" mr="3">
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
