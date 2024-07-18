import { JSX } from "react";
import { useParams } from "react-router-dom";
import { useGame } from "../hooks";
import { GridItem, Heading, SimpleGrid, SkeletonText } from "@chakra-ui/react";
import { ExpandableText, GameAttributes, GameAttributesSkeleton, GameScreenshots, GameTrailer } from "../components";

export const GameDetailsPage = (): JSX.Element | null => {
    const { slug } = useParams();
    const { game, isLoading, error } = useGame(slug!);

    if (error) throw error;

    if (!game) return null;

    return (
        <SimpleGrid columns={{ base: 1, lg: 2 }} p={5} gap={5}>
            <GridItem>
                {isLoading ? (
                    <>
                        <SkeletonText noOfLines={1} skeletonHeight={45} w="85%" mb={2}></SkeletonText>
                        <SkeletonText noOfLines={5} skeletonHeight={4}></SkeletonText>
                        <GameAttributesSkeleton />
                    </>
                ) : (
                    <>
                        <Heading>{game.name}</Heading>
                        <ExpandableText>{game.description_raw}</ExpandableText>
                        <GameAttributes game={game} />
                    </>
                )}
            </GridItem>
            <GridItem>
                <GameTrailer gameId={game.id} />
                <GameScreenshots gameId={game.id} />
            </GridItem>
        </SimpleGrid>
    );
};
