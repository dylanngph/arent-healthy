import React, { useEffect, useRef } from "react";
import { Container, VStack } from "@chakra-ui/react";
import SectionButtons from "./components/section-buttons";
import GraphSection from "./components/graph-section";
import ExercisesSection from "./components/exercises-section";
import DiarySection from "./components/diary-section";

const Records = () => {
  const [activeSection, setActiveSection] = React.useState<HTMLElement | null>(null);
  const handleScroll = (id: string) => {
    setActiveSection(document.getElementById(id));
  };

  useEffect(() => {
    if (!activeSection) return;
    else {
      setActiveSection(null);
      activeSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  , [activeSection]);


  return (
    <Container maxW="container.lg" px={0} pt="56px" pb="64px">
      <VStack w="full" align="start" spacing="56px">
        <SectionButtons handleScroll={handleScroll} />
        <GraphSection />
        <ExercisesSection />
        <DiarySection />
      </VStack>
    </Container>
  );
};

export default Records;
