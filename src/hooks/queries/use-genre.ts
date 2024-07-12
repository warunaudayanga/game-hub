import { useGenres } from "./use-genres.ts";
import { Genre } from "../../interfaces";

export const useGenre = (id?: number): Genre | undefined => {
    const { genres } = useGenres();
    return genres?.results.find(genre => genre.id === id);
};
