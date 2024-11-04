import { Box, Icon, Link as ChakraLink, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaChurch } from "react-icons/fa";
import { MdCelebration } from "react-icons/md";
import {
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const MenuSideBar: React.FC = () => {
  return (
    <Box as="aside" w="64" p={8} mr={1}>
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="gray.500" fontSize="small">
            GERAL
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <ChakraLink
              as={Link}
              to="/dashboard"
              display="flex"
              alignItems="center"
            >
              <Icon as={RiDashboardLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Dashboard
              </Text>
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/igreja"
              display="flex"
              alignItems="center"
            >
              <Icon as={FaChurch} />
              <Text ml="4" fontWeight="medium">
                Igrejas
              </Text>
            </ChakraLink>
            <ChakraLink
              as={Link}
              to="/Confraternizacao"
              display="flex"
              alignItems="center"
            >
              <Icon as={MdCelebration} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Confraternização
              </Text>
            </ChakraLink>
          </Stack>
        </Box>
        <Box>
          <Text fontWeight="bold" color="gray.500" fontSize="small">
            AUTOMAÇÃO
          </Text>
          <Stack spacing="4" mt="8" align="stretch">
            <ChakraLink display="flex" alignItems="center">
              <Icon as={RiInputMethodLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Formularios
              </Text>
            </ChakraLink>
            <ChakraLink display="flex" alignItems="center">
              <Icon as={RiGitMergeLine} fontSize={20} />
              <Text ml="4" fontWeight="medium">
                Automação
              </Text>
            </ChakraLink>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};
