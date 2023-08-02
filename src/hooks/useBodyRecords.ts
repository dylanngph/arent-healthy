import React from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import {
  getBodyRecords,
  getBodyRecordsByDiary,
} from "@/api/body-records/body-records";

export const useBodyRecords = ({ label }: { label: string }) => {
  const { data, isFetching, status, error, refetch } = useQuery({
    queryKey: ["body-records", label],
    queryFn: () =>
      getBodyRecords({
        label,
      }),
    refetchOnWindowFocus: false,
  });

  return {
    bodyRecords: data,
    isFetching,
    status,
    error,
    refetch,
  };
};

export const useDiaryRecords = ({
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
    queryKey: ["diary-records", page],
    queryFn: ({ pageParam = page }) =>
      getBodyRecordsByDiary({
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
    diary: data,
    isFetching,
    fetchNextPage,
    isFetchingNextPage,
    status,
    error,
    hasNextPage,
    refetch,
  };
};

export default useBodyRecords;
