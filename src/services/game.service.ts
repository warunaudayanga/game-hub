// noinspection JSUnusedGlobalSymbols

import { createHttpService } from "./http.service.ts";
import { Game } from "../interfaces";
import { Endpoint } from "../enums/endpoints.enum.ts";

export const gameService = createHttpService<Game>(Endpoint.GAMES);
