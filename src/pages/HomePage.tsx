import { JSX } from "react";
import { Box, Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import { GameGrid, GameHeading, GenreList, PlatformSelector, SortSelector } from "../components";

export const HomePage = (): JSX.Element => {
    return (
        <Grid
            // h="100vh"
            templateAreas={{
                base: '"main"',
                lg: '"aside main"',
            }}
            templateColumns={{
                base: "1fr",
                lg: "260px 1fr",
            }}
            templateRows={{
                base: "70px 1fr",
            }}
        >
            <Show above="lg">
                <GridItem area="aside" paddingX={5} mt={16}>
                    <GenreList />
                </GridItem>
            </Show>
            <GridItem
                area="main"
                mt={16}
                // h="calc(100vh - 70px)"
                // overflowY="auto"
            >
                <VStack h="100%" alignItems="start" paddingX={{ base: 3, md: 5 }}>
                    <Box ms={2}>
                        <GameHeading />
                        <HStack w="100%" justifyContent={{ base: "center", md: "start" }} spacing={5} mb={5}>
                            <PlatformSelector />
                            <SortSelector />
                        </HStack>
                    </Box>
                    <GameGrid />
                </VStack>
            </GridItem>
        </Grid>
    );
};
