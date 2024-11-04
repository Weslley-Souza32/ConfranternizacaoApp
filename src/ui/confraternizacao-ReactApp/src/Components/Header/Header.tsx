import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Logo from "../../assets/logo-iasd-white.svg";
import { Input } from "../Input/Input";
import { RiNotificationLine, RiSearchLine, RiUserLine } from "react-icons/ri";

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      h="20"
      mx="auto"
      px="6"
      align="center"
      bg="blackAlpha.900"
    >
      <Image src={Logo} alt="Logotipo" w="60px" ml="10" />
      <Flex
        as="label"
        flex="1"
        py="2"
        px="8"
        ml="8rem"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.600"
        borderRadius="full"
      >
        <Input
          name=""
          label=""
          type="text"
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Buscar"
          _placeholder={{ color: "gray.400" }}
        />
        <Icon as={RiSearchLine} fontSize={20} _hover={{ cursor: "pointer" }} />
      </Flex>
      <Flex align="center" ml="auto" mr="10">
        <HStack
          mx="2"
          pr="2"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Button
            as="a"
            bg="blackAlpha.900"
            color="#FFF"
            _hover={{
              bg: "blackAlpha.900",
              cursor: "pointer",
              color: "gray.500",
            }}
          >
            <Icon as={RiNotificationLine} fontSize={20} />
          </Button>
          <Button
            as="a"
            bg="blackAlpha.900"
            color="#FFF"
            _hover={{
              bg: "blackAlpha.900",
              cursor: "pointer",
              color: "gray.500",
            }}
          >
            <Icon as={RiUserLine} fontSize={20} />
          </Button>
        </HStack>
        <Flex align="center">
          <Box mr={4} textAlign="center">
            <Text>Weslley Junio</Text>
            <Text color="gray.300" fontSize="small">
              weslley3032@gmail.com
            </Text>
          </Box>
          <Avatar
            size="md"
            name="Weslley Junio"
            src="https://github.com/Weslley-Souza32.png"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};
