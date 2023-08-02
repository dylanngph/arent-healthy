import React from "react";
import useBodyRecords, { useDiaryRecords } from "@/hooks/useBodyRecords";
import {
  Box,
  Text,
  VStack,
  Grid,
  GridItem,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

const DiarySection = () => {
  //fetch diary data hook
  const {
    diary,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useDiaryRecords({
    page: 1,
    limit: 8,
  });

  return (
    <Box id='my-diary' w="full" px={{base: 3, lg: 0}}>
      <Text fontSize={22} textTransform="uppercase">
        My Diary
      </Text>
      <Grid
        w="full"
        templateColumns={{
          base: "100%",
          md: "repeat(2,1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="12px"
      >
        {diary
          ? diary.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.map((diary: any, index: any) => (
                  <GridItem key={index}>
                    <DiaryCard>
                      <VStack align="start" spacing="8px">
                        <Box>
                          <Text fontSize={18}>{diary.date}</Text>
                          <Text fontSize={18}>{diary.time}</Text>
                        </Box>
                        <Box>
                          <Text variant="noto" fontSize={12}>
                            {diary.title}
                          </Text>
                          <Text variant="noto" fontSize={12}>
                            {diary.description}
                          </Text>
                        </Box>
                      </VStack>
                    </DiaryCard>
                  </GridItem>
                ))}
              </React.Fragment>
            ))
          : null}
      </Grid>
      {isFetching && !isFetchingNextPage ? (
        <HStack w="full" justify="center" minH="300px">
          <Spinner width="120px" height="120px" color="primary.400" />
        </HStack>
      ) : null}
      <HStack w="full" mt="28px" justify="center">
        <PrimaryButton
          isDisabled={!hasNextPage}
          onClick={(e: Event) => {
            e.preventDefault();
            fetchNextPage();
          }}
        >
          自分の日記をもっと見る
        </PrimaryButton>
      </HStack>
    </Box>
  );
};

const DiaryCard = styled(Box)`
  border: 2px solid #707070;
  padding: 16px;
`;

export default DiarySection;
