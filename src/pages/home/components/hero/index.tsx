import React from "react";
import { Box, Text, Stack, Grid, GridItem, DarkMode } from "@chakra-ui/react";
import AchievementSection from "./achievement-section";
import GraphSection from "./graph-section";

const HeroSection = () => {
  return (
    <Stack
      w="100%"
      h={{base: 'fit-content', lg: "312px"}}
      direction={{ base: "column", lg: "row" }}
      gap={0}
    >
      <Box w={{ base: "auto", lg: '540px' }}>
        <AchievementSection />
      </Box>
      <Box w={{ base: "auto", lg: 'calc(100% - 540px)' }}>
        <GraphSection />
      </Box>
    </Stack>
  );
};

export default HeroSection;
