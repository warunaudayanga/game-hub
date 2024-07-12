/* eslint-disable camelcase */
import { InfiniteData, QueryFunctionContext, useInfiniteQuery, UseInfiniteQueryResult } from "@tanstack/react-query";
import { Game, GameFilters, ListFetchResponse } from "../../interfaces";
import { gameService } from "../../services";
import { CACHE_KEY_GAMES } from "../../constants/constants.ts";
import ms from "ms";

export const useGames = (
    filters: GameFilters,
): Omit<UseInfiniteQueryResult<InfiniteData<ListFetchResponse<Game>, number>>, "data"> & {
    games?: InfiniteData<ListFetchResponse<Game>, number>;
} => {
    const { data, ...rest } = useInfiniteQuery<ListFetchResponse<Game>>({
        queryKey: [...CACHE_KEY_GAMES, filters],
        queryFn: ({ pageParam = 1 }: QueryFunctionContext): Promise<ListFetchResponse<Game>> => {
            return gameService.getAll({
                ...filters,
                page: pageParam as number,
                parent_platforms: filters.platformId,
                genres: filters.genreId,
                ordering: filters.sortBy,
                search: filters.keyword,
            });
        },
        staleTime: ms("24h"),
        initialPageParam: 1,
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.next ? allPages.length + 1 : undefined;
        },
    });
    return { games: data, ...rest } as Omit<
        UseInfiniteQueryResult<InfiniteData<ListFetchResponse<Game>, number>>,
        "data"
    > & {
        games?: InfiniteData<ListFetchResponse<Game>, number>;
    };
};
