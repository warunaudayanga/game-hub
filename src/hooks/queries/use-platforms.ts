import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { ListFetchResponse, Platform } from "../../interfaces";
import { platformService } from "../../services";
import { CACHE_KEY_PLATFORMS } from "../../constants/constants.ts";
import { defaultPlatforms } from "../../data";
import ms from "ms";

export const usePlatforms = (): Omit<UseQueryResult<Platform[]>, "data"> & {
    platforms: ListFetchResponse<Platform> | undefined;
} => {
    const { data, ...rest } = useQuery<ListFetchResponse<Platform>>({
        queryKey: CACHE_KEY_PLATFORMS,
        queryFn: () => platformService.getAll(),
        staleTime: ms("24h"),
        initialData: defaultPlatforms,
    });
    return { platforms: data, ...rest } as Omit<UseQueryResult<Platform[]>, "data"> & {
        platforms: ListFetchResponse<Platform> | undefined;
    };
};
