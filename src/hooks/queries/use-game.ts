/* eslint-disable camelcase */
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Game } from "../../interfaces";
import { gameService } from "../../services";
import { CACHE_KEY_GAMES } from "../../constants";

export const useGame = (slug: string): Omit<UseQueryResult<Game>, "data"> & { game: Game | undefined } => {
    const { data, ...rest } = useQuery<Game>({
        queryKey: [...CACHE_KEY_GAMES, slug],
        queryFn: (): Promise<Game> => gameService.getGame(slug),
    });
    return { game: data, ...rest } as Omit<UseQueryResult<Game>, "data"> & { game: Game | undefined };
};
