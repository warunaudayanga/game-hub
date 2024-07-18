import { JSX } from "react";
import { Heading } from "@chakra-ui/react";
import { useGenre, usePlatform } from "../../hooks";
import { useGameFiltersState } from "../../store";

export const GameHeading = (): JSX.Element => {
    const genreId = useGameFiltersState(state => state.filters.genreId);
    const genreName = useGenre(genreId)?.name;

    const platformId = useGameFiltersState(state => state.filters.platformId);
    const platformName = usePlatform(platformId)?.name;

    const search = useGameFiltersState(state => state.filters.search);

    const heading = `${platformName ? platformName + " " : ""}${genreName ? genreName + " " : ""}Games${search ? ` with keyword: ${search}` : ""}`;

    return (
        <Heading as="h1" marginBottom={5}>
            {heading}
        </Heading>
    );
};
