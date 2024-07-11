import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Genre, ListFetchResponse } from "../../interfaces";
import { genreService } from "../../services";
import { CACHE_KEY_GENRES } from "../../constants/constants.ts";
import { defaultGenres } from "../../data";

export const useGenres = (): Omit<UseQueryResult<Genre[]>, "data"> & {
    genres: ListFetchResponse<Genre> | undefined;
} => {
    const { data, ...rest } = useQuery<ListFetchResponse<Genre>>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: () => genreService.getAll(),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        initialData: defaultGenres,
    });
    return { genres: data, ...rest } as Omit<UseQueryResult<Genre[]>, "data"> & {
        genres: ListFetchResponse<Genre> | undefined;
    };
};
