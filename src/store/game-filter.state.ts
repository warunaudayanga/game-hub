import { SortBy } from "../types/sort-by.type.ts";
import { create } from "zustand";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { GameFilters } from "../interfaces";

interface GameFiltersState {
    filters: GameFilters;
    setGenreId: (genreId?: number) => void;
    setPlatformId: (platformId?: number) => void;
    setSortBy: (sortBy?: SortBy) => void;
    setSearch: (search?: string) => void;
}

const useGameFiltersState = create<GameFiltersState>(set => ({
    filters: {},
    setSearch: (search?: string): void => set(() => ({ filters: { search } })),
    setSortBy: (sortBy?: SortBy): void => set(store => ({ filters: { ...store.filters, sortBy } })),
    setPlatformId: (platformId?: number): void => set(store => ({ filters: { ...store.filters, platformId } })),
    setGenreId: (genreId?: number): void => set(store => ({ filters: { ...store.filters, genreId } })),
}));

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
if (process.env.NODE_ENV === "development") {
    mountStoreDevtool("GameFiltersState", useGameFiltersState);
}

export { useGameFiltersState };
