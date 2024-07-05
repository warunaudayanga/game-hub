import { SortBy } from "../types/sort-by.type.ts";

export interface SortOption {
    label: string;
    value: SortBy | null;
}
