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
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  StackDivider,
  useDisclosure,
} from "@chakra-ui/react";
import NotificationBadge from "../ui/badges/NotificationBadge";
import { DRAWER_NAVIGATION, NAVIGATION_ITEMS } from "@/config/navigation";
import { NavLink } from "react-router-dom";

const MenuDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Popover placement="bottom-end" isOpen={isOpen} onClose={onClose}>
      <PopoverTrigger>
        <IconButton
          variant="ghost"
          aria-label="Menu"
          icon={
            isOpen ? (
              <img src="/icons/icon_close.svg" alt="menu" />
            ) : (
              <img src="/icons/icon_menu.svg" alt="menu" />
            )
          }
          ml="16px"
          onClick={onToggle}
        />
      </PopoverTrigger>
      <PopoverContent borderRadius={0} color="white" maxW="280px">
        <PopoverBody p={0}>
          <Stack
            divider={
              <StackDivider
                borderColor="#2E2E2E"
                opacity=".25"
                mt="0!important"
                mb="0!important"
              />
            }
          >
            {DRAWER_NAVIGATION.map((item) => {
              return (
                <Button
                  key={item.title}
                  as={NavLink}
                  variant="ghost"
                  w="100%"
                  justifyContent="flex-start"
                  px="32px"
                  py="23px"
                  fontSize={18}
                  borderRadius={0}
                  h="fit-content"
                  borderTop="1px solid"
                  borderColor="#ffffff26"
                  to={item.href}
                  sx={{
                    ":first-of-type": {
                      borderTop: "none",
                    },
                  }}
                >
                  <Text fontFamily="inherit" fontWeight={300}>
                    {item.title}
                  </Text>
                </Button>
              );
            })}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

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
          <Box as={NavLink} to='/' width="109px" height="40px">
            <img src="/logo.svg" alt="" />
          </Box>
          <HStack spacing={0}>
            {NAVIGATION_ITEMS.map((item) => {
              return (
                <NavLink key={item.title} to={item.href}>
                  <Box
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
                      <Text fontFamily="inherit" fontWeight={300}>
                        {!isMobile && item.title}
                      </Text>
                    </HStack>
                  </Box>
                </NavLink>
              );
            })}
            <MenuDrawer />
          </HStack>
        </Stack>
      </Container>
    </HeaderContainer>
  );
};

export default Header;
