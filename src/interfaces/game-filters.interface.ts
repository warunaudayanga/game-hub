import { SortBy } from "../types/sort-by.type.ts";

export interface GameFilters {
    genreId?: number;
    platformId?: number;
    sortBy?: SortBy;
    search?: string;
}
