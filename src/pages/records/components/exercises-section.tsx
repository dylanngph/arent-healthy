import React, { useEffect } from "react";
import {
  Box,
  Text,
  Stack,
  VStack,
  HStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import useBodyRecords from "@/hooks/useBodyRecords";
import styled from "@emotion/styled";

const ExercisesSection = () => {
  //fetching exercises records hook
  const { bodyRecords, isFetching, status } = useBodyRecords({
    label: "exercises",
  });

  const records = status === "success" ? bodyRecords[0].records : [];

  return (
    <Box id='my-exercise' bg="#414141" py={4} px={6} w="full" color="white">
      <VStack w="full" align="start">
        <HStack align="center" spacing={8}>
          <Text fontSize={16} textTransform="uppercase">
            My <br />
            Exercises
          </Text>
          <Text fontSize={22}>2021.05.21</Text>
        </HStack>
        <StyledGrid
          w="full"
          templateColumns={{ base: "100%", md: "repeat(2, 1fr)" }}
          columnGap="40px"
        >
          {records.map((record: any, index: any) => {
            if (isFetching) return <Box>Loading...</Box>;
            if (status === "error") return null;
            return (
              <GridItem
                key={index}
                borderBottom="1px solid"
                borderColor="dark.400"
              >
                <HStack w="full" justify="space-between" align="start" py="8px">
                  <VStack align="start">
                    <Text variant='noto' fontSize={15}>{record.title}</Text>
                    <Text fontSize={15} color="#FFCC21">
                      {record.kcal}
                    </Text>
                  </VStack>
                  <Text fontSize={18} color="#FFCC21">
                    {record.time} min
                  </Text>
                </HStack>
              </GridItem>
            );
          })}
        </StyledGrid>
      </VStack>
    </Box>
  );
};

const StyledGrid = styled(Grid)`
  max-height: 192px;
  overflow: auto;
  padding-right: 32px;
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: #777;
    border-radius: 3px;
  }
  ::-webkit-scrollbar-thumb {
    background: #ffcc21;
    border-radius: 3px;
  }
`;

export default ExercisesSection;
