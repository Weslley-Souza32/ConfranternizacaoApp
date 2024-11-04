import { Flex } from "@chakra-ui/react";
import React from "react";
import { Header } from "../../Components/Header/Header";
import { MenuSideBar } from "../../Components/MenuSideBar/MenuSideBar";

export const Dashboard: React.FC = () => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} px="6">
        <MenuSideBar />
      </Flex>
    </Flex>
  );
};
