import { Box, Fade } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";

const ScrollTopButton = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Box position="relative">
      <Fade  in={showTopBtn}>
        <StyledBox onClick={goToTop} bottom={{base: '40px', lg: '40%'}}>
          <img src="/icons/component_scroll.svg" />
        </StyledBox>
      </Fade>
    </Box>
  );
};

const StyledBox = styled(Box)`
  position: fixed;
  right: 25px;
  z-index: 20;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 50%;
  :hover {
    background: rgba(0, 0, 0, 0.05);
  }
`;

export default ScrollTopButton;
