import React from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../../hooks";
import { GameCardContainer } from "./GameCardContainer.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCard } from "./GameCard.tsx";
import { GameFilters } from "../../interfaces";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
    filters: GameFilters;
}

export const GameGrid = ({ filters }: Props): React.JSX.Element => {
    filters.pageSize = 10;

    const { games, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading, error } = useGames(filters);
    const skeletons = [...Array.from(Array(filters.pageSize).keys()).map(i => i + 1)];

    if (error) {
        return (
            <Flex w="100%" flexGrow={1} alignItems="center" justifyContent="center">
                {error.message}
            </Flex>
        );
    }

    const fetchedCount: number = games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    return (
        <Box paddingBottom={10} w="100%">
            <InfiniteScroll
                dataLength={fetchedCount}
                hasMore={hasNextPage}
                next={() => fetchNextPage()}
                loader={<span></span>}
                endMessage={
                    <p style={{ textAlign: "center" }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                // refreshFunction={handleRefresh}
                // pullDownToRefresh
                // pullDownToRefreshThreshold={50}
                // pullDownToRefreshContent={<h3 style={{ textAlign: "center" }}>&#8595; Pull down to refresh</h3>}
                // releaseToRefreshContent={<h3 style={{ textAlign: "center" }}>&#8593; Release to refresh</h3>}
            >
                <SimpleGrid w="100%" columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
                    {games?.pages.map((page, index) => (
                        <React.Fragment key={index}>
                            {Boolean(page.results.length) &&
                                page.results.map(game => (
                                    <GameCardContainer key={game.id}>
                                        <GameCard game={game} />
                                    </GameCardContainer>
                                ))}
                        </React.Fragment>
                    ))}
                    {(isLoading || isFetchingNextPage) &&
                        skeletons.map(skeleton => (
                            <GameCardContainer key={skeleton}>
                                <GameCardSkeleton />
                            </GameCardContainer>
                        ))}
                </SimpleGrid>
            </InfiniteScroll>
        </Box>
    );
};
