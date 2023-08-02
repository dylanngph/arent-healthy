import React from "react";
import {
  Grid,
  GridItem,
  Text,
  Box,
  VStack,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import { useRecomendations } from "@/hooks/useRecomendations";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";

const MainSection = () => {
  //fetch diary data hook
  const {
    recomendations,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useRecomendations({
    page: 1,
    limit: 8,
  });

  return (
    <Box>
      <Grid
        w="full"
        templateColumns={{
          base: "100%",
          md: "repeat(2,1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap="12px"
      >
        {recomendations
          ? recomendations.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.map((diary: any, index: any) => (
                  <GridItem key={index}>
                    <Card
                      image={diary.image}
                      description={diary.description}
                      date={diary.date}
                      time={diary.time}
                      tags={diary.tags}
                    />
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
          コラムをもっと見る
        </PrimaryButton>
      </HStack>
    </Box>
  );
};

const Card = ({
  image,
  description,
  date,
  time,
  tags,
}: {
  image: string;
  description: string;
  date: string;
  time: string;
  tags: string[];
}) => {
  return (
    <Box>
      <VStack w="full" align="start">
        <Box
          position="relative"
          bg={`url(${image})`}
          bgSize="cover"
          bgPosition="center"
          w="full"
          h="144.47px"
        >
          <Box
            position="absolute"
            bottom={0}
            left={0}
            p="8px"
            color="white"
            bg="primary.300"
          >
            <Text fontSize={15}>
              {date} {time}
            </Text>
          </Box>
        </Box>
        <Box>
          <Text variant="noto" fontSize={15}>
            {description}
          </Text>
        </Box>
        <HStack>
          {tags.map((tag, index) => (
            <Text key={index} fontSize={12} color="primary.400">
              {tag}
            </Text>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

export default MainSection;
