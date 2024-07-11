import { Genre } from "./genre.interface.ts";
import { Platform } from "./platform.interface.ts";
import { SortBy } from "../types/sort-by.type.ts";
import { InfinitePagination } from "./pagination.interface.ts";

export interface GameFilters extends InfinitePagination {
    genre: Genre | null;
    platform: Platform | null;
    sort: SortBy | null;
    search: string | null;
}
