import { getRecommendations } from "@/api/recomendations/recommendation";
import { useInfiniteQuery } from "@tanstack/react-query";

export const useRecomendations = ({
  page,
  limit,
}: {
  page?: number;
  limit?: number;
}) => {
  const {
    data,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    status,
    error,
    hasNextPage,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["diary-records"],
    queryFn: ({ pageParam = page }) =>
      getRecommendations({
        page: pageParam as number,
        limit,
      }),
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length + 1;
      return lastPage.length > 0 ? nextPage : undefined;
    },
    refetchOnWindowFocus: false,
  });

  return {
    recomendations: data,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    status,
    error,
    hasNextPage,
    refetch,
  };
};
