import React, { useState } from "react";
import "./App.css";
import { Grid, GridItem, HStack, Show, VStack } from "@chakra-ui/react";
import { GameGrid, GenreList, NavBar } from "./components";
import { PlatformSelector } from "./components/PlatformSelector.tsx";
import { GameFilters } from "./interfaces";
import { SortSelector } from "./components/SortSelector.tsx";
import { GameHeading } from "./components/games/GameHeading.tsx";

const App = (): React.JSX.Element => {
    const [filters, setFilters] = useState<GameFilters>({});
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
                    <NavBar onSearch={search => setFilters({ ...filters, keyword: search })}></NavBar>
                </GridItem>
                <Show above="lg">
                    <GridItem
                        area="aside"
                        paddingX={5}
                        mt={16}
                        // // h="calc(100vh - 70px)"
                        // overflowY="auto"
                    >
                        <GenreList
                            selectedGenreId={filters.genreId}
                            onSelectGenre={genre => setFilters({ ...filters, genreId: genre })}
                        />
                    </GridItem>
                </Show>
                <GridItem
                    area="main"
                    mt={16}
                    // h="calc(100vh - 70px)"
                    // overflowY="auto"
                >
                    <VStack h="100%" alignItems="start" paddingX={{ base: 3, md: 5 }}>
                        <GameHeading filters={filters} />
                        <HStack w="100%" justifyContent={{ base: "center", md: "start" }} spacing={5} marginBottom={5}>
                            <PlatformSelector
                                selectedPlatformId={filters.platformId}
                                onSelectPlatform={platform => setFilters({ ...filters, platformId: platform?.id })}
                            />
                            <SortSelector
                                selectedSortOption={filters.sortBy}
                                onSort={sort => setFilters({ ...filters, sortBy: sort })}
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
