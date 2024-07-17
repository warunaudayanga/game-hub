import { JSX } from "react";
import { Button, HStack, Image } from "@chakra-ui/react";
import { Genre } from "../../interfaces";
import { getCroppedImageUrl } from "../../services";
import gameSvg from "../../assets/game.svg";

interface Props {
    genre: Genre;
    isSelected?: boolean;
    onSelectGenre: (genre?: number) => void;
}

export const GenreItem = ({ genre, isSelected, onSelectGenre }: Props): JSX.Element => {
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
                fontWeight={isSelected ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre.id)}
            >
                {genre.name}
            </Button>
        </HStack>
    );
};
