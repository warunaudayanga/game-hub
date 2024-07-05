// noinspection JSUnusedGlobalSymbols

import { createHttpService } from "./http.service.ts";
import { Genre } from "../interfaces";
import { Endpoint } from "../enums/endpoints.enum.ts";

export const genreService = createHttpService<Genre>(Endpoint.GENRES);
