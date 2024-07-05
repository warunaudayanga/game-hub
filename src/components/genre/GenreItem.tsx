import React from "react";
import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../../interfaces";
import { getCroppedImageUrl } from "../../services";
import gameSvg from "../../assets/game.svg";

interface Props {
    genre: Genre;
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre) => void;
}

export const GenreItem = ({ genre, selectedGenre, onSelectGenre }: Props): React.JSX.Element => {
    return (
        <HStack>
            <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background ? getCroppedImageUrl(genre.image_background) : gameSvg}
                backgroundColor={genre.image_background ? "transparent" : "gray.300"}
                objectFit="cover"
            ></Image>
            <Button
                fontSize="lg"
                variant="link"
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
            >
                {genre.name}
            </Button>
        </HStack>
    );
};
