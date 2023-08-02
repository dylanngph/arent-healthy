import axiosInstance from "..";

export const getRecommendations = async ({
    page,
    limit,
  }:{
    page?: number;
    limit?: number;
  }) => {
    const response = await axiosInstance.get("/column", {params: {
      _page: page,
      _limit: limit,
    }});
    return response.data;
  };