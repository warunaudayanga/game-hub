import { JSX } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import { GameGrid, GenreList, NavBar } from "./components";
import { PlatformSelector } from "./components/PlatformSelector.tsx";
import { SortSelector } from "./components/SortSelector.tsx";
import { GameHeading } from "./components/games/GameHeading.tsx";

const App = (): JSX.Element => {
    return (
        <>
            <Grid
                // h="100vh"
                templateAreas={{
                    base: '"header" "main"',
                    lg: '"header header" "aside main"',
                }}
                templateColumns={{
                    base: "1fr",
                    lg: "260px 1fr",
                }}
                templateRows={{
                    base: "70px 1fr",
                }}
            >
                <GridItem area="header">
                    <NavBar></NavBar>
                </GridItem>
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
                        <GameHeading />
                        <HStack w="100%" justifyContent={{ base: "center", md: "start" }} spacing={5} marginBottom={5}>
                            <PlatformSelector />
                            <SortSelector />
                        </HStack>
                        <GameGrid />
                    </VStack>
                </GridItem>
            </Grid>
        </>
    );
};

export default App;
