import React from "react";
import {
  Box,
  Link,
  Heading,
  Text,
  Stack,
  Flex,
  SimpleGrid,
} from "@chakra-ui/react";

import { Section } from "./Section";
import { SectionHeadline } from "./SectionHeadline";
import { SideProject } from "../api/github";

type Props = {
  projects: SideProject[];
};

export const ProjectsSection = ({ projects }: Props) => {
  return (
    <Section>
      <SectionHeadline>Side Projects</SectionHeadline>
      <SimpleGrid columns={[1, 1, 2]} spacing={10}>
        {projects.map((project) => (
          <Box
            key={project.id}
            as={Link}
            href={project.url}
            display={"block"}
            p={6}
            rounded={"md"}
            bg={"gray.900"}
            _hover={{
              textDecoration: "none",
              transform: "translateY(-5px)",
            }}
          >
            <Stack spacing={4} h={"full"}>
              <Heading
                as={"h3"}
                size={"md"}
                fontWeight={500}
                color={"brand.green.base"}
              >
                {project.name}
              </Heading>
              <Text>{project.description}</Text>
              <Flex height={"full"}>
                <Flex
                  mt={"auto"}
                  w={"full"}
                  alignItems={"center"}
                  justifyContent={"space-between"}
                >
                  <Text fontSize={"sm"}>
                    {project.stargazers.totalCount} 🌟
                  </Text>
                  <Text
                    fontWeight={600}
                    display={"inline-flex"}
                    alignSelf={"flex-end"}
                  >
                    Explore on GitHub
                  </Text>
                </Flex>
              </Flex>
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </Section>
  );
};
