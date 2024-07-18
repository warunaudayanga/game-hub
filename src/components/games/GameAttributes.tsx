import { JSX } from "react";
import { Game } from "../../interfaces";
import { DefinitionItem } from "../DefinitionItem.tsx";
import { SimpleGrid, Text } from "@chakra-ui/react";
import { CriticScore } from "./CriticScore.tsx";

interface Props {
    game: Game;
}

export const GameAttributes = ({ game }: Props): JSX.Element => {
    return (
        <SimpleGrid columns={2} as="dl">
            <DefinitionItem term="Platforms">
                {game.parent_platforms?.map(({ platform }) => (
                    <Text m={0} key={platform.id}>
                        {platform.name}
                    </Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Metascore">
                <CriticScore score={game.metacritic} />
            </DefinitionItem>
            <DefinitionItem term="Genres">
                {game.genres?.map(genre => (
                    <Text m={0} key={genre.id}>
                        {genre.name}
                    </Text>
                ))}
            </DefinitionItem>
            <DefinitionItem term="Genres">
                {game.publishers?.map(publisher => (
                    <Text m={0} key={publisher.id}>
                        {publisher.name}
                    </Text>
                ))}
            </DefinitionItem>
        </SimpleGrid>
    );
};
