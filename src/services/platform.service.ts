// noinspection JSUnusedGlobalSymbols

import { createHttpService } from "./http.service.ts";
import { Platform } from "../interfaces";
import { Endpoint } from "../enums";

export const platformService = createHttpService<Platform>(Endpoint.PLATFORMS);
