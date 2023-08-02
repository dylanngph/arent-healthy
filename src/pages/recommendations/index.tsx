import React from "react";
import CategoriesButtons from "./components/categories-buttons";
import { Container, VStack } from "@chakra-ui/react";
import MainSection from "./components/recommendations-section";

const Recommendations = () => {
  return (
    <Container maxW="container.lg" pt="56px" pb="64px" px={0}>
      <VStack w="full" spacing="56px">
        <CategoriesButtons />
        <MainSection />
      </VStack>
    </Container>
  );
};

export default Recommendations;
