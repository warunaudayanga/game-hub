import React from "react";
import { Game } from "../../interfaces";
import { Card, CardBody, Flex, Heading, HStack, Image, VStack } from "@chakra-ui/react";
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
            {game.rating_top > 3 && (
                <Flex
                    position="absolute"
                    w="50px"
                    h="50px"
                    borderRadius="50%"
                    top={1}
                    right={3}
                    bg={"black"}
                    opacity={0.7}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Emoji rating={game.rating_top}></Emoji>
                </Flex>
            )}
            <CardBody>
                <VStack h="100%">
                    <HStack w="100%" justifyContent="space-between">
                        <PlatformIconList platforms={game.parent_platforms?.map(p => p.platform)} />
                        <CriticScore score={game.metacritic} />
                    </HStack>
                    <Heading fontSize="2xl" w="100%">
                        {game.name}
                    </Heading>
                </VStack>
            </CardBody>
        </Card>
    );
};
