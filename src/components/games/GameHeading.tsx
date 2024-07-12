import React from "react";
import { Heading } from "@chakra-ui/react";
import { GameFilters } from "../../interfaces";
import { useGenre, usePlatform } from "../../hooks";

interface Props {
    filters: GameFilters;
}

export const GameHeading = ({ filters }: Props): React.JSX.Element => {
    const genreName = useGenre(filters.genreId)?.name;
    const platformName = usePlatform(filters.platformId)?.name;
    const heading = `${platformName ? platformName + " " : ""}${genreName ? genreName + " " : ""}Games`;
    return (
        <Heading as="h1" marginBottom={5}>
            {heading}
        </Heading>
    );
};
