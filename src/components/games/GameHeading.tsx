import { JSX } from "react";
import { Heading } from "@chakra-ui/react";
import { useGenre, usePlatform } from "../../hooks";
import { useGameFiltersState } from "../../store/game-filter.state.ts";

export const GameHeading = (): JSX.Element => {
    const genreId = useGameFiltersState(state => state.filters.genreId);
    const genreName = useGenre(genreId)?.name;

    const platformId = useGameFiltersState(state => state.filters.platformId);
    const platformName = usePlatform(platformId)?.name;

    const heading = `${platformName ? platformName + " " : ""}${genreName ? genreName + " " : ""}Games`;

    return (
        <Heading as="h1" marginBottom={5}>
            {heading}
        </Heading>
    );
};
