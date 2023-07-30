import React from "react";
import {
  Box,
  Stack,
  Container,
  HStack,
  Button,
  DarkMode,
  useBreakpointValue,
  IconButton,
  Text,
} from "@chakra-ui/react";
import NotificationBadge from "../ui/badges/NotificationBadge";
import { NAVIGATION_ITEMS } from "@/config/navigation";



const HeaderContainer = ({
  children,
  ...sx
}: {
  children: React.ReactNode;
}) => {
  return (
    <DarkMode>
      <Box
        position="relative"
        zIndex={10}
        w="100%"
        bg="dark.500"
        h="64px"
        boxShadow="0px 3px 6px 0px rgba(0, 0, 0, 0.16)"
        py={1}
        {...sx}
      >
        {children}
      </Box>
    </DarkMode>
  );
};

const Header = () => {
  const isMobile = useBreakpointValue({ base: true, lg: false });
  return (
    <HeaderContainer>
      <Container maxW="container.lg" h="full" px={{ base: 4, lg: 0 }}>
        <Stack
          w="100%"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          h="full"
        >
          <Box width="109px" height="40px">
            <img src="/logo.svg" alt="" />
          </Box>
          <HStack spacing={0}>
            {NAVIGATION_ITEMS.map((item) => {
              return (
                <Box
                  key={item.title}
                  as={isMobile ? IconButton : Button}
                  variant="ghost"
                  w={["auto", "160px"]}
                >
                  <HStack>
                    {item.badge ? (
                      <Box
                        position="relative"
                        bgImage={`url("${item.icon}")`}
                        bgRepeat="no-repeat"
                        backgroundSize="contain"
                        w="32px"
                        h="32px"
                      >
                        <NotificationBadge top={0} right="13px">
                          {item.badge}
                        </NotificationBadge>
                      </Box>
                    ) : (
                      <img
                        src={item.icon}
                        alt={item.title}
                        width={32}
                        height={32}
                      />
                    )}
                    <Text fontFamily="inherit" fontWeight={300}>{!isMobile && item.title}</Text>
                  </HStack>
                </Box>
              );
            })}
            <IconButton
              variant="ghost"
              aria-label="Menu"
              icon={<img src="/icons/icon_menu.svg" alt="menu" />}
              ml='16px'
            /> 
          </HStack>
        </Stack>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
