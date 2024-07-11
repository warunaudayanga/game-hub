import React from "react";
import { Box, Button, Flex, SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../../hooks";
import { GameCardContainer } from "./GameCardContainer.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCard } from "./GameCard.tsx";
import { GameFilters } from "../../interfaces";

interface Props {
    filters: GameFilters;
}

export const GameGrid = ({ filters }: Props): React.JSX.Element => {
    filters.pageSize = 10;

    const { games, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading, error } = useGames(filters);
    const skeletons = [...Array.from(Array(10).keys()).map(i => i + 1)];

    if (error) {
        return (
            <Flex w="100%" flexGrow={1} alignItems="center" justifyContent="center">
                {error.message}
            </Flex>
        );
    }

    return (
        <Box paddingBottom={10}>
            <SimpleGrid w="100%" columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
                {isLoading &&
                    skeletons.map(skeleton => (
                        <GameCardContainer key={skeleton}>
                            <GameCardSkeleton />
                        </GameCardContainer>
                    ))}
                {games?.pages.map((page, index) => (
                    <React.Fragment key={index}>
                        {page.results.length &&
                            page.results.map(game => (
                                <GameCardContainer key={game.id}>
                                    <GameCard game={game} />
                                </GameCardContainer>
                            ))}
                    </React.Fragment>
                ))}
            </SimpleGrid>
            {hasNextPage && (
                <Button
                    className="btn btn-dark mb-5"
                    marginY={6}
                    disabled={isFetchingNextPage}
                    // eslint-disable-next-line @typescript-eslint/no-misused-promises
                    onClick={() => fetchNextPage()}
                >
                    {isFetchingNextPage ? "Loading..." : "Load More"}
                </Button>
            )}
        </Box>
    );
};
