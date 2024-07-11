// noinspection JSUnusedGlobalSymbols

import { createHttpService } from "./http.service.ts";
import { Platform } from "../interfaces";
import { Endpoint } from "../enums/endpoints.enum.ts";

export const platformService = createHttpService<Platform>(Endpoint.PLATFORMS);
