import React from "react";
import { Button } from "@chakra-ui/react";
import { motion } from "framer-motion";

const PrimaryButton = ({ ...props }) => {
  return (
    <Button
      as={motion.button}
      bg="primary_gradient.fill"
      color="white"
      h="fit-content"
      p="14px 25px 16px"
      w="296px"
      fontSize={18}
      fontWeight={300}
      _hover={{
        bg: "primary_gradient.fill",
      }}
      _active={{
        bg: "primary_gradient.fill",
      }}
      transition="0.05s linear"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      {...props}
    />
  );
};

export default PrimaryButton;
