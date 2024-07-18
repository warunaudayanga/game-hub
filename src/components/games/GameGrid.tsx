import { Fragment, JSX } from "react";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../../hooks";
import { GameCardContainer } from "./GameCardContainer.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCard } from "./GameCard.tsx";
import InfiniteScroll from "react-infinite-scroll-component";

export const GameGrid = (): JSX.Element => {
    const pageSize = 10;

    const { games, hasNextPage, isFetchingNextPage, fetchNextPage, isLoading, error } = useGames(pageSize);

    const skeletons = [...Array.from(Array(pageSize).keys()).map(i => i + 1)];
    const fetchedCount: number = games?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

    if (error) {
        return (
            <Flex w="100%" flexGrow={1} alignItems="center" justifyContent="center">
                {error.message}
            </Flex>
        );
    }

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
                <SimpleGrid w="100%" columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} p={2}>
                    {games?.pages.map((page, index) => (
                        <Fragment key={index}>
                            {Boolean(page.results.length) &&
                                page.results.map(game => (
                                    <GameCardContainer key={game.id}>
                                        <GameCard game={game} />
                                    </GameCardContainer>
                                ))}
                        </Fragment>
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
