import { JSX } from "react";
import { useParams } from "react-router-dom";
import { useGame } from "../hooks";
import { GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { ExpandableText, GameAttributes, GameScreenshots, GameTrailer } from "../components";

export const GameDetailsPage = (): JSX.Element => {
    const { slug } = useParams();
    const { game, isLoading, error } = useGame(slug!);

    if (isLoading) return <Spinner />;

    if (error || !game) throw error || new Error("Game not found");

    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} p={5} gap={5}>
            <GridItem>
                <Heading>{game.name}</Heading>
                <ExpandableText>{game.description_raw}</ExpandableText>
                <GameAttributes game={game} />
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id} />
                <GameScreenshots gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    );
};
