import { axiosInstance } from "..";

export const getDiary = async ({
  page,
  limit,
  category,
}: {
  page?: number;
  limit?: number;
  category?: string;
}) => {
  const response = await axiosInstance.get("/diary", {
    params: {
      _page: page,
      _limit: limit,
      category,
    },
  });
  return response.data;
};
