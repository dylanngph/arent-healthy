import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Footer from "./footer";
import ScrollTopButton from "../ui/buttons/ScrollTopButton";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Container maxW='container.xl' px={0} pb='64px' minH="calc(100vh - 64px)">
        <ScrollTopButton/>
        <Outlet />
      </Container>
      <Footer/>
    </React.Fragment>
  );
};

export default RootLayout;
