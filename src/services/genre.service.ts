// noinspection JSUnusedGlobalSymbols

import { createHttpService } from "./http.service.ts";
import { Genre } from "../interfaces";
import { Endpoint } from "../enums/endpoints.enum.ts";

// export class GenreService extends HttpService<ListFetchResponse<Genre>> {
//     constructor() {
//         super(Endpoint.GENRES);
//     }
// }
//
// export const genreService = new GenreService();

export const genreService = createHttpService<Genre>(Endpoint.GENRES);
