import { SortBy } from "../types";

export interface GameFilters {
    genreId?: number;
    platformId?: number;
    sortBy?: SortBy;
    search?: string;
}
