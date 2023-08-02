import React from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  Stack,
  StackDivider,
  Divider,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

export const CategoriesButtons = () => {
  const sections = [
    {
      title: "RECOMMENDED COLUMN",
      description: "オススメ",
    },
    {
      title: "RECOMMENDED DIET",
      description: "ダイエット",
    },
    {
      title: "RECOMMENDED BEAUTY",
      description: "美容",
    },
    {
      title: "RECOMMENDED HEALTH",
      description: "健康",
    },
  ];

  return (
    <Stack
      w="full"
      direction={{ base: "column", lg: "row" }}
      gap="32px"
      justifyContent="center"
      alignItems="center"
    >
      {sections.map((section) => (
        <StyledSectionButtons
          key={section.title}
          title={section.title}
          description={section.description}
        />
      ))}
    </Stack>
  );
};

const StyledSectionButtons = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <Box
      as={motion.div}
      w="216px"
      h="144px"
      px="12px"
      py="24px"
      bg="dark.600"
      position="relative"
      cursor="pointer"
      color="white"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
    >
      <Box position="relative" zIndex={3} w="full" h="full">
        <Stack
          w="fit-content"
          h="full"
          justify="center"
          direction="column"
          alignItems="center"
          textAlign="center"
        >
          <Text fontSize={22} color="#FFCC21" textTransform="uppercase">
            {title}
          </Text>
          <Divider w="56px" />
          <Text variant="noto" fontSize={18}>
            {description}
          </Text>
        </Stack>
      </Box>
    </Box>
  );
};

export default CategoriesButtons;
