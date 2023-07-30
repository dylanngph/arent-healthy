import React from "react";
import Header from "./header";
import { Outlet } from "react-router-dom";
import { Container } from "@chakra-ui/react";
import Footer from "./footer";

const RootLayout = () => {
  return (
    <React.Fragment>
      <Header />
      <Container maxW='container.xl' px={0} pb='64px'>
        <Outlet />
      </Container>
      <Footer/>
    </React.Fragment>
  );
};

export default RootLayout;
