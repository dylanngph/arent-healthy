import { Box, HStack } from "@chakra-ui/react";
import Graph from "@/components/ui/graph/Graph";
import {faker} from "@faker-js/faker";

const GraphSection = () => {
  const options = {
    responsive: true,
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
          color: "white",
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

  const labels = [
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月",
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Body Weight",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "#FFCC21",
      },
      {
        label: "Body Fat",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "#8FE9D0",
      },
    ],
  };
  return (
    <Box bg="#2E2E2E" h="full" color="white" py='12px' px={5}>
      <HStack w="full" h="full" justify="center" align="center">
        <Graph options={options} data={data} />
      </HStack>
    </Box>
  );
};

export default GraphSection;
