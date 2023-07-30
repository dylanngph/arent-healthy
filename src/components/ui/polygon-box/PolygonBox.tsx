import { Box } from "@chakra-ui/react";

const PolygonBox = ({ ...props }) => {
  return (
    <Box
      clipPath="polygon(50% 0%,95% 25%,95% 75%,50% 100%,5% 75%,5% 25%)"
      {...props}
    />
  );
};

export default PolygonBox;
