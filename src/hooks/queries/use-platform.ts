import { usePlatforms } from "./use-platforms.ts";
import { Platform } from "../../interfaces";

export const usePlatform = (id?: number): Platform | undefined => {
    const { platforms } = usePlatforms();
    return platforms?.results.find(platform => platform.id === id);
};
