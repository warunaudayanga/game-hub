/* eslint-disable camelcase */
import React from "react";
import { useGenres } from "../../hooks";
import { Heading, List } from "@chakra-ui/react";
import { GenreItemContainer } from "./GenreItemContainer.tsx";
import { GenreItem } from "./GenreItem.tsx";
import { GenreItemSkeleton } from "./GenreItemSkeleton.tsx";
import { Genre } from "../../interfaces";

interface Props {
    selectedGenre: Genre | null;
    onSelectGenre: (genre: Genre | null) => void;
}

export const GenreList = ({ selectedGenre, onSelectGenre }: Props): React.JSX.Element | null => {
    const { genres, isLoading, error } = useGenres();
    // const bg = useColorModeValue("white", "gray.800");
    const skeletons = [...Array.from(Array(20).keys()).map(i => i + 1)];

    if (error) return null;

    return (
        <>
            <Heading
                fontSize="2xl"
                paddingBottom={1}
                marginBottom={3}
                // position="sticky" top="0" bg={bg} zIndex={1}
            >
                Genres
            </Heading>
            <List>
                {isLoading &&
                    skeletons.map(skeleton => (
                        <GenreItemContainer key={skeleton}>
                            <GenreItemSkeleton></GenreItemSkeleton>
                        </GenreItemContainer>
                    ))}
                {genres?.results.length && (
                    <GenreItemContainer key={0}>
                        <GenreItem
                            genre={{ id: 0, name: "All Genres", slug: "" }}
                            selectedGenre={selectedGenre}
                            onSelectGenre={() => onSelectGenre(null)}
                        ></GenreItem>
                    </GenreItemContainer>
                )}
                {genres?.results.length &&
                    genres.results.map(genre => (
                        <GenreItemContainer key={genre.id}>
                            <GenreItem
                                genre={genre}
                                selectedGenre={selectedGenre}
                                onSelectGenre={onSelectGenre}
                            ></GenreItem>
                        </GenreItemContainer>
                    ))}
            </List>
        </>
    );
};
