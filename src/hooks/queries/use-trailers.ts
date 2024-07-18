import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CACHE_KEY_GAME_TRAILERS } from "../../constants";
import { gameService } from "../../services";
import { GameTrailer, ListFetchResponse } from "../../interfaces";

export const useTrailers = (
    gameId: number,
): Omit<UseQueryResult<ListFetchResponse<GameTrailer>>, "data"> & {
    trailers: ListFetchResponse<GameTrailer> | undefined;
} => {
    const { data, ...rest } = useQuery({
        queryKey: [...CACHE_KEY_GAME_TRAILERS, gameId],
        queryFn: () => gameService.getGameTrailers(gameId),
    });
    return { trailers: data, ...rest } as Omit<UseQueryResult<ListFetchResponse<GameTrailer>>, "data"> & {
        trailers: ListFetchResponse<GameTrailer> | undefined;
    };
};
