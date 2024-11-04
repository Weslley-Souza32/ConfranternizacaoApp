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

export const Igreja: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxW={1580} px="6">
        <MenuSideBar />

        <Box flex="1" borderRadius={5} bg="gray.900" p={8}>
          <Flex mb="8" align="center">
            <Heading size="lg" fontWeight="normal">
              Cadastro de Igrejas
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
            <TableContainer w="100%">
              <Table variant="simple">
                <TableCaption>Igrejas</TableCaption>
                <Thead>
                  <Tr>
                    <Th>Código</Th>
                    <Th>Nome</Th>
                    <Th>Endereço</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>ig-090</Td>
                    <Td>IASD São Paulo</Td>
                    <Td>Rua Alto Guandu, 330 - Bairro São Paulo(MG)</Td>
                  </Tr>
                  <Tr>
                    <Td>ig-020</Td>
                    <Td>IASD Morro Alto</Td>
                    <Td>Rua C, 190 - Bairro Morro Alto (MG)</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent mt="140">
          <ModalHeader color="blue.200" bg="gray.700">
            Cadastro de Igreja
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6} bg="blue.900">
            <Flex gap={5}>
              <FormControl>
                <Input name="codigo" label="Código" type="text" />
                <Input name="endereo" label="Endereço" type="text" />
              </FormControl>
              <FormControl>
                <Input name="nome" label="Nome" type="text" />
                <Input name="nome" label="Nome" type="text" />
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
