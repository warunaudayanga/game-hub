// noinspection JSUnusedGlobalSymbols

import { HttpService } from "./http.service.ts";
import { Game, GameScreenshot, GameTrailer, ListFetchResponse } from "../interfaces";
import { Endpoint } from "../enums";
import httpClient from "./http-client.ts";

export class GameService extends HttpService<Game> {
    constructor() {
        super(Endpoint.GAMES);
    }

    async getGame(slug: string): Promise<Game> {
        const res = await httpClient.get<Game>(`${this.endpoint}/${slug}`);
        return res.data;
    }

    async getGameTrailers(id: number): Promise<ListFetchResponse<GameTrailer>> {
        const res = await httpClient.get<ListFetchResponse<GameTrailer>>(`${this.endpoint}/${id}/movies`);
        return res.data;
    }

    async getGameScreenshots(id: number): Promise<ListFetchResponse<GameScreenshot>> {
        const res = await httpClient.get<ListFetchResponse<GameScreenshot>>(`${this.endpoint}/${id}/screenshots`);
        return res.data;
    }
}

export const gameService = new GameService();
