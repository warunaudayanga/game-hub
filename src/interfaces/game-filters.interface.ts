import { SortBy } from "../types/sort-by.type.ts";
import { InfinitePagination } from "./pagination.interface.ts";

export interface GameFilters extends InfinitePagination {
    genreId?: number;
    platformId?: number;
    sortBy?: SortBy;
    keyword?: string;
}
