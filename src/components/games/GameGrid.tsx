import React from "react";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { useGames } from "../../hooks";
import { GameCardContainer } from "./GameCardContainer.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCard } from "./GameCard.tsx";
import { GameFilters } from "../../interfaces";

interface Props {
    filters: GameFilters;
}

export const GameGrid = ({ filters }: Props): React.JSX.Element => {
    const { games, isLoading, error } = useGames(filters);
    const skeletons = [...Array.from(Array(10).keys()).map(i => i + 1)];

    if (error) {
        return (
            <Flex w="100%" flexGrow={1} alignItems="center" justifyContent="center">
                {error}
            </Flex>
        );
    }

    return (
        <SimpleGrid w="100%" columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6} paddingBottom={10}>
            {isLoading &&
                skeletons.map(skeleton => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>
                ))}
            {games.map(game => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game} />
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};
