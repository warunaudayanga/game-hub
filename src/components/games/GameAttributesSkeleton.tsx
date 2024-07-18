import { JSX } from "react";
import { SimpleGrid, SkeletonText } from "@chakra-ui/react";
import { DefinitionItem } from "../DefinitionItem.tsx";

export const GameAttributesSkeleton = (): JSX.Element => {
    const definitionItemText = Array.from({ length: 3 }, (_, i) => (
        <SkeletonText key={i} noOfLines={1} skeletonHeight={4} w="50%" m={2} />
    ));
    return (
        <SimpleGrid columns={2} as="dl">
            <DefinitionItem term="Platforms">{definitionItemText}</DefinitionItem>
            <DefinitionItem term="Metascore">
                <SkeletonText noOfLines={1} skeletonHeight={5} w={7} m={2} />
            </DefinitionItem>
            <DefinitionItem term="Genres">{definitionItemText}</DefinitionItem>
            <DefinitionItem term="Genres">{definitionItemText}</DefinitionItem>
        </SimpleGrid>
    );
};
