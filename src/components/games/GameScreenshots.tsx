import { JSX } from "react";
import { Image, SimpleGrid, Skeleton } from "@chakra-ui/react";
import { useScreenshots } from "../../hooks";

interface Props {
    gameId: number;
}

export const GameScreenshots = ({ gameId }: Props): JSX.Element | null => {
    const { screenshots, isLoading, error } = useScreenshots(gameId);

    if (error) throw error;

    const skeletons = Array.from({ length: 4 }, (_, i) => i);

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} my={5} gap={5}>
            {isLoading
                ? skeletons.map(i => <Skeleton key={i} w="100%" aspectRatio="16/9" />)
                : screenshots?.results.map(file => <Image key={file.id} src={file.image}></Image>)}
        </SimpleGrid>
    );
};
