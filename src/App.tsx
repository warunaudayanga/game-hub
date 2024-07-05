import React, { useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import { GameGrid, GenreList, NavBar } from "./components";
import { PlatformSelector } from "./components/PlatformSelector.tsx";
import { GameFilters } from "./interfaces";
import { SortSelector } from "./components/SortSelector.tsx";
import { GameHeading } from "./components/GameHeading.tsx";

const App = (): React.JSX.Element => {
    const [filters, setFilters] = useState<GameFilters>({ genre: null, platform: null, sort: null, search: null });
    return (
        <>
            <Grid
                h="100vh"
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
                    <NavBar onSearch={search => setFilters({ ...filters, search })}></NavBar>
                </GridItem>
                <Show above="lg">
                    <GridItem area="aside" h="calc(100vh - 70px)" overflowY="auto" paddingX={5}>
                        <GenreList
                            selectedGenre={filters.genre}
                            onSelectGenre={genre => setFilters({ ...filters, genre })}
                        />
                    </GridItem>
                </Show>
                <GridItem area="main" h="calc(100vh - 70px)" overflowY="auto">
                    <VStack h="100%" alignItems="start" paddingX={{ base: 3, md: 5 }}>
                        <GameHeading filters={filters} />
                        <HStack w="100%" justifyContent={{ base: "center", md: "start" }} spacing={5} marginBottom={5}>
                            <PlatformSelector
                                selectedPlatform={filters.platform}
                                onSelectPlatform={platform => setFilters({ ...filters, platform })}
                            />
                            <SortSelector
                                selectedSortOption={filters.sort}
                                onSort={sort => setFilters({ ...filters, sort })}
                            />
                        </HStack>
                        <GameGrid filters={filters}></GameGrid>
                    </VStack>
                </GridItem>
            </Grid>
        </>
    );
};

export default App;
