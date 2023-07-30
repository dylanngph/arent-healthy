import React from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getDiary } from "@/api/diary/diary-api";

export const useDiary = ({
  page,
  limit,
  category,
}: {
  page?: number;
  limit?: number;
  category?: string;
}) => {
  const {
    data,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    status,
    error,
    hasNextPage,
    refetch
  } = useInfiniteQuery({
    queryKey: ["diary"],
    queryFn: ({ pageParam = page}) =>
      getDiary({
        page: pageParam as number,
        limit,
        category,
      }),
    getNextPageParam: (lastPage, pages) => {
      const nextPage = pages.length + 1;
      return lastPage.length > 0 ? nextPage : undefined;
    },
    refetchOnWindowFocus: false
  });

  return {
    diary: data,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    status,
    error,
    hasNextPage,
    refetch
  };
};

export default useDiary;
