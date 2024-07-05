import React from "react";
import { Heading } from "@chakra-ui/react";
import { GameFilters } from "../interfaces";

interface Props {
    filters: GameFilters;
}

export const GameHeading = ({ filters }: Props): React.JSX.Element => {
    const heading = `${filters.platform?.name ? filters.platform.name + " " : ""}${filters.genre?.name ? filters.genre.name + " " : ""}Games`;
    return (
        <Heading as="h1" marginBottom={5}>
            {heading}
        </Heading>
    );
};
