import {
  Grid,
  GridItem,
  VStack,
  Text,
} from "@chakra-ui/react";
import PolygonBox from "@/components/ui/polygon-box/PolygonBox";
import { motion } from "framer-motion";



const Categories = ({
  handleCategoryChange,
}: {
  handleCategoryChange: any;
}) => {
  const categories = [
    {
      label: "Morning",
      icon: "/icons/fork_icon.svg",
      key: "morning",
    },
    {
      label: "Lunch",
      icon: "/icons/fork_icon.svg",
      key: "lunch",
    },
    {
      label: "Dinner",
      icon: "/icons/fork_icon.svg",
      key: "dinner",
    },
    {
      label: "Snack",
      icon: "/icons/snack-icon.svg",
      key: "snacks",
    },
  ];

  return (
    <Grid
      w="full"
      templateColumns={{ base: "repeat(2, auto)", lg: "repeat(4, auto)" }}
      justifyContent="center"
      gap={{base: '24px' , lg: "84px" }}
    >
      {categories.map((category, index) => (
        <GridItem colSpan={{ base: 1, lg: 1 }} key={index}>
          <PolygonBox
            as={motion.div}
            w="134px"
            h="134px"
            bg="linear-gradient(156deg, #FFCC21 0%, #FF963C 100%)"
            color="white"
            cursor="pointer"
            transition="0.05s linear"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            onClick={() => {
              handleCategoryChange(category.key);
            }}
          >
            <VStack
              h="full"
              w="full"
              align="center"
              justify="center"
              spacing="5px"
            >
              <img src={category.icon} alt={category.label} height='45px' />
              <Text fontSize={20}>{category.label}</Text>
            </VStack>
          </PolygonBox>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Categories;
