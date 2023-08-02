import React, { useState } from "react";
import { Box, Text, Stack, VStack, HStack } from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import Graph from "@/components/ui/graph/Graph";
import styled from "@emotion/styled";
import useBodyRecords from "@/hooks/useBodyRecords";

const GraphSection = () => {
  //sort by day, week, month, year
  const [sortBy, setSortBy] = useState("year");

  //Chart Option
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: "index" as const,
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
        text: "Sample Chart",
      },
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        grid: {
          color: "#777",
        },
      },
      y: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        //remove the y axis
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
  };

  //fetching body fat records hook
  const { bodyRecords } = useBodyRecords({
    label: "body-fat",
  });

  const recordBySort =
    bodyRecords && bodyRecords[0]
      ? bodyRecords[0].records.filter((r: any) => r.date === sortBy)
      : [];

  const filterCurrentDate = bodyRecords && bodyRecords[0]
  ? bodyRecords[0].records.filter((r: any) => r.date === sortBy)
  : [];

  //   mock data for each sorting
  const data = {
    labels: recordBySort && recordBySort[0] ? recordBySort[0].value : [],
    datasets: [
      {
        label: "Body Weight",
        data: recordBySort && recordBySort[0]
          ? recordBySort[0].value.map(() =>
              faker.datatype.number({ min: -1000, max: 1000 })
            )
          : [],
        borderColor: "#FFCC21",
      },
      {
        label: "Body Fat",
        data: recordBySort && recordBySort[0]
          ? recordBySort[0].value.map(() =>
              faker.datatype.number({ min: -1000, max: 1000 })
            )
          : [],
        borderColor: "#8FE9D0",
      },
    ],
  };

  return (
    <Box id='body-record' bg="#414141" py={4} px={6} w="full" color="white">
      <VStack w="full" align="start">
        <HStack align="center" spacing={8}>
          <Text fontSize={16} textTransform="uppercase">
            Body <br />
            Record
          </Text>
          <Text fontSize={22}>
            {filterCurrentDate && filterCurrentDate[0] ? filterCurrentDate[0].filter : 'N/A'}
          </Text>
        </HStack>
        <Box w="full" h="200px">
          <Graph options={options} data={data} />
        </Box>
        <HStack spacing={4}>
          {["day", "week", "month", "year"].map((item) => (
            <StyledTag
              key={item}
              bg={item === sortBy ? "#FFCC21" : "white"}
              onClick={() => setSortBy(item)}
            >
              <Text color={item === sortBy ? "white" : "#FFCC21"} fontSize={15}>
                {item === "year"
                  ? "年"
                  : item === "month"
                  ? "月"
                  : item === "week"
                  ? "週"
                  : "日"}
              </Text>
            </StyledTag>
          ))}
        </HStack>
      </VStack>
    </Box>
  );
};

const StyledTag = styled(HStack)`
  width: 56px;
  height: 24px;
  border-radius: 11px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
`;

export default GraphSection;
