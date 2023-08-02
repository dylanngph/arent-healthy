import React from "react";
import { Box, Text, Button, VStack, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const SectionButtons = ({
  handleScroll,
}: {
  handleScroll: (id: string) => void;
}) => {
  const sections = [
    {
      title: "Body Record",
      image: "/images/pages/records/MyRecommend-1.jpg",
      description: "自分のカラダの記録",
      key: "body-record",
    },
    {
      title: "My Exercise",
      image: "/images/pages/records/MyRecommend-2.jpg",
      description: "自分の運動の記録",
      key: "my-exercise",
    },
    {
      title: "My Diary",
      image: "/images/pages/records/MyRecommend-3.jpg",
      description: "自分の日記",
      key: "my-diary",
    },
  ];

  return (
    <Stack
      w="full"
      direction={{ base: "column", lg: "row" }}
      gap="48px"
      justifyContent="center"
      alignItems="center"
    >
      {sections.map((section) => (
        <StyledSectionButtons
          key={section.key}
          title={section.title}
          image={section.image}
          description={section.description}
          onClick={(e: Event) => {
            e.preventDefault();
            handleScroll(section.key);
          }}
        />
      ))}
    </Stack>
  );
};

const StyledSectionButtons = ({
  title,
  image,
  description,
  onClick,
}: {
  title: string;
  image: string;
  description: string;
  onClick: any;
}) => {
  return (
    <Box
      as={motion.div}
      w="288px"
      h="288px"
      border="24px solid"
      borderColor="#FFCC21"
      position="relative"
      cursor="pointer"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
    >
      <Box
        w="full"
        h="full"
        bg="#2e2e2e"
        mixBlendMode="luminosity"
        position="absolute"
        top="0"
        left="0"
        zIndex={1}
      />
      <Box
        position="absolute"
        w="full"
        h="full"
        top="0"
        left="0"
        zIndex={2}
        bg={`url(${image})`}
        mixBlendMode="luminosity"
        opacity="0.25"
        objectFit="cover"
        bgPosition="top center"
        bgSize="cover"
      />
      <Box position="relative" zIndex={3} w="full" h="full">
        <VStack w="full" h="full" justify="center">
          <Text fontSize={25} color="#FFCC21" textTransform="uppercase">
            {title}
          </Text>
          <Button
            variant="unstyled"
            borderRadius="0"
            bg="#FF963C"
            color="white"
            fontSize={14}
            fontWeight={300}
            px={4}
            minW="160px"
            h="24px"
          >
            <Text variant="noto">{description}</Text>
          </Button>
        </VStack>
      </Box>
    </Box>
  );
};

export default SectionButtons;
