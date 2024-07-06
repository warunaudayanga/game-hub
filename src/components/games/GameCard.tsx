import React from "react";
import { Game } from "../../interfaces";
import { Card, CardBody, Heading, HStack, Image, VStack } from "@chakra-ui/react";
import { PlatformIconList } from "../PlatformIconList.tsx";
import { CriticScore } from "./CriticScore.tsx";
import { getCroppedImageUrl } from "../../services";
import gameSvg from "../../assets/game.svg";
import { Emoji } from "../Emoji.tsx";

interface Props {
    game: Game;
}

export const GameCard = ({ game }: Props): React.JSX.Element => {
    return (
        <Card h="100%">
            <Image src={getCroppedImageUrl(game.background_image) || gameSvg}></Image>
            <CardBody>
                <VStack h="100%">
                    <HStack w="100%" justifyContent="space-between">
                        <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
                        <HStack>
                            <CriticScore score={game.metacritic} />
                            {game.rating_top > 3 && <Emoji rating={game.rating_top}></Emoji>}
                        </HStack>
                    </HStack>
                    <Heading fontSize="2xl" w="100%">
                        {game.name}
                    </Heading>
                </VStack>
            </CardBody>
        </Card>
    );
};
