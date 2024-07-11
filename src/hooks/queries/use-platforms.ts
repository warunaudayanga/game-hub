import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ListFetchResponse, Platform } from "../../interfaces";
import { platformService } from "../../services";
import { CACHE_KEY_PLATFORMS } from "../../constants/constants.ts";
import { defaultPlatforms } from "../../data";

export const usePlatforms = (): Omit<UseQueryResult<Platform[]>, "data"> & {
    platforms: ListFetchResponse<Platform> | undefined;
} => {
    const { data, ...rest } = useQuery<ListFetchResponse<Platform>>({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: () => platformService.getAll(),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
        initialData: defaultPlatforms,
    });
    return { platforms: data, ...rest } as Omit<UseQueryResult<Platform[]>, "data"> & {
        platforms: ListFetchResponse<Platform> | undefined;
    };
};
