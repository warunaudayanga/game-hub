import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { CACHE_KEY_GAME_SCREENSHOTS } from "../../constants";
import { gameService } from "../../services";
import { GameScreenshot, ListFetchResponse } from "../../interfaces";

export const useScreenshots = (
    gameId: number,
): Omit<UseQueryResult<ListFetchResponse<GameScreenshot>>, "data"> & {
    screenshots: ListFetchResponse<GameScreenshot> | undefined;
} => {
    const { data, ...rest } = useQuery({
        queryKey: [...CACHE_KEY_GAME_SCREENSHOTS, gameId],
        queryFn: () => gameService.getGameScreenshots(gameId),
    });
    return { screenshots: data, ...rest } as Omit<UseQueryResult<ListFetchResponse<GameScreenshot>>, "data"> & {
        screenshots: ListFetchResponse<GameScreenshot> | undefined;
    };
};
