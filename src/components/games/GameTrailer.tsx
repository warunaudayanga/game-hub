import { JSX } from "react";
import { useTrailers } from "../../hooks";
import { Box, Skeleton } from "@chakra-ui/react";

interface Props {
    gameId: number;
}

export const GameTrailer = ({ gameId }: Props): JSX.Element | null => {
    const { trailers, isLoading, error } = useTrailers(gameId);

    if (isLoading) return <Skeleton h={300} />;

    if (error) throw error;

    const firstTrailer = trailers?.results[0];

    return firstTrailer ? (
        <Box my={5}>
            <video width="100%" src={firstTrailer.data["480"]} poster={firstTrailer.preview} controls />
        </Box>
    ) : null;
};
