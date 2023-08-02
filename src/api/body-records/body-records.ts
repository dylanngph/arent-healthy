import { axiosInstance } from "..";

export const getBodyRecords = async ({
  label
}:{
  label?: string
  page?: number;
  limit?: number;
}) => {
  const response = await axiosInstance.get("/body-records", {params: {
    label,
  }});
  return response.data;
};


export const getBodyRecordsByDiary = async ({
  page,
  limit,
}:{
  page?: number;
  limit?: number;
}) => {
  const response = await axiosInstance.get("/diary-records", {params: {
    _page: page,
    _limit: limit,
  }});
  return response.data;
};