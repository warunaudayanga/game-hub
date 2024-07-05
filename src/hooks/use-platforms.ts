import { Dispatch, SetStateAction } from "react";
import { useData } from "./use-data.ts";
import { Endpoint } from "../enums/endpoints.enum.ts";
import { Platform } from "../interfaces";
import { UseDataHook } from "../interfaces/hook.interfaces.ts";

export const usePlatforms = (): {
    platforms: Platform[];
    setPlatform: Dispatch<SetStateAction<Platform[]>>;
} & UseDataHook => {
    const { data: platforms, setData: setPlatform, ...rest } = useData<Platform>(Endpoint.PLATFORMS);
    return { platforms, setPlatform, ...rest };
};
