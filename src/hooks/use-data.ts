import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { AxiosError, AxiosRequestConfig } from "axios";
import { createHttpService } from "../services";
import { DataResponse, Game } from "../interfaces";
import { CanceledError } from "../services/http-client.ts";
import { Endpoint } from "../enums/endpoints.enum.ts";
import { UseDataHook } from "../interfaces/hook.interfaces.ts";

export const useData = <T>(
    endpoint: Endpoint,
    requestConfig?: AxiosRequestConfig,
    deps?: unknown[],
): {
    data: T[];
    setData: Dispatch<SetStateAction<T[]>>;
} & UseDataHook => {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    useEffect(
        () => {
            setData([]);
            setLoading(true);
            setError("");
            const { request, cancel } = createHttpService<Game>(endpoint).getAll<DataResponse<T>>(requestConfig);
            request
                .then(res => {
                    setData(res.data.results);
                    setLoading(false);
                })
                .catch((err: AxiosError | CanceledError<unknown>) => {
                    if (err instanceof CanceledError) return;
                    setLoading(false);
                    setError(err.message);
                });
            return (): void => cancel();
        },
        deps ? deps : [],
    );

    return { data, isLoading, error, setData, setLoading, setError };
};
