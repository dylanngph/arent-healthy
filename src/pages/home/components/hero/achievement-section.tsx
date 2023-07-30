import React from "react";
import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  Text,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import LazyLoad from "react-lazyload";

const Wrapper = styled(Box)`
  background-image: url("/images/pages/home/d01.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const Overlay = styled(Box)`
  background: linear-gradient(225deg, #ffcc21 0%, #ff963c 100%);
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  opacity: 0.9987779855728149;
  mix-blend-mode: soft-light;
`;

const AchievementSection = () => {
  const [value, setValue] = React.useState(75);

  return (
    <LazyLoad style={{height: '100%'}}>
      <Wrapper h="full">
        <Overlay />
        <CircularProgress
          value={value}
          trackColor="transparent"
          color="white"
          size="181px"
          thickness="2px"
          sx={{
            filter: "drop-shadow(0px 0px 6px #FC7400)",
          }}
        >
          <CircularProgressLabel>
            <Text color="white" fontSize={25} fontWeight={400}>
              <Text as="span" fontSize={18}>
                05/21
              </Text>{" "}
              {value}%
            </Text>
          </CircularProgressLabel>
        </CircularProgress>
      </Wrapper>
    </LazyLoad>
  );
};

export default AchievementSection;
