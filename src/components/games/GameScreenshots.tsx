import { JSX } from "react";
import { Image, SimpleGrid } from "@chakra-ui/react";
import { useScreenshots } from "../../hooks";

interface Props {
    gameId: number;
}

export const GameScreenshots = ({ gameId }: Props): JSX.Element | null => {
    const { screenshots, isLoading, error } = useScreenshots(gameId);

    if (isLoading) return null;

    if (error) throw error;

    return (
        <SimpleGrid columns={{ base: 1, md: 2 }} my={5} gap={5}>
            {screenshots?.results.map(file => <Image key={file.id} src={file.image}></Image>)}
        </SimpleGrid>
    );
};
