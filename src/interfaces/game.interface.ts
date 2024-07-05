import { Platform } from "./platform.interface.ts";

export interface Game {
    id: string;
    name: string;
    background_image: string;
    parent_platforms?: { platform: Platform }[];
    metacritic: number;
    rating_top: number;
    rating: number;
}
