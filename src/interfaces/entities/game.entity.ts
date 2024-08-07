import { Platform } from "./platform.entity.ts";
import { Genre } from "./genre.entity.ts";
import { Publisher } from "./publisher.entity.ts";

export interface Game {
    id: number;
    slug: string;
    name: string;
    description_raw: string;
    background_image: string;
    parent_platforms?: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    rating: number;
    genres?: Genre[];
    publishers?: Publisher[];
}
