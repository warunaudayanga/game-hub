import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Genre, ListFetchResponse } from "../../interfaces";
import { genreService } from "../../services";
import { CACHE_KEY_GENRES } from "../../constants/constants.ts";
import { defaultGenres } from "../../data";
import ms from "ms";

export const useGenres = (): Omit<UseQueryResult<Genre[]>, "data"> & {
    genres: ListFetchResponse<Genre> | undefined;
} => {
    const { data, ...rest } = useQuery<ListFetchResponse<Genre>>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: () => genreService.getAll(),
        staleTime: ms("24h"),
        initialData: defaultGenres,
    });
    return { genres: data, ...rest } as Omit<UseQueryResult<Genre[]>, "data"> & {
        genres: ListFetchResponse<Genre> | undefined;
    };
};
