import React, { useEffect } from "react";
import {
  Container,
  Grid,
  GridItem,
  HStack,
  Spinner,
} from "@chakra-ui/react";
import useDiary from "@/hooks/useDiary";
import DiaryCard from "./DiaryCard";
import Categories from "./Categories";
import PrimaryButton from "@/components/ui/buttons/PrimaryButton";



const MainSection = () => {
  const [diaryCategory, setDiaryCategory] = React.useState<string | undefined>(
    undefined
  );
  const {
    diary,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    refetch,
  } = useDiary({
    page: 1,
    limit: 8,
    category: diaryCategory,
  });

  const handleCategoryChange = (category: string) => {
    setDiaryCategory(category);
  };

  useEffect(() => {
    if (diaryCategory) {
      refetch();
    }
  }, [diaryCategory, refetch]);

  return (
    <Container maxW="container.lg" px={0}>
      <Categories handleCategoryChange={handleCategoryChange} />
      <Grid
        w="full"
        templateColumns={{ base: "repeat(2, auto)", lg: "repeat(4, auto)" }}
        gap="8px"
        mt="24px"
        justifyContent='center'
      >
        {diary
          ? diary.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group.map((diary: any, index: any) => (
                  <GridItem key={index} w='fit-content'>
                    <DiaryCard
                      image={diary.image}
                      date={diary.date}
                      category={diary.category}
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
          onClick={(e:Event) => {
            e.preventDefault();
            fetchNextPage();
          }}
        >
          記録をもっと見る
        </PrimaryButton>
      </HStack>
    </Container>
  );
};

export default MainSection;
