// noinspection JSUnusedGlobalSymbols,Annotator

import httpClient, { AxiosResponse } from "./http-client";
import { GetAllResponse } from "../interfaces";
import { AxiosRequestConfig } from "axios";

export class HttpService<Entity> {
    constructor(private endpoint: string) {}

    getAll<T>(requestConfig?: AxiosRequestConfig): GetAllResponse<T> {
        const controller = new AbortController();
        const request = httpClient.get<T>(this.endpoint, {
            signal: controller.signal,
            ...requestConfig,
        });
        return {
            request,
            cancel: (): void => {
                controller.abort();
            },
        };
    }

    get(id: number): Promise<AxiosResponse<Entity>> {
        return httpClient.get<Entity>(`${this.endpoint}/${id}`);
    }

    create<T>(dto: T): Promise<AxiosResponse<Entity>> {
        return httpClient.post<Entity>(this.endpoint, dto);
    }

    update<T>(id: number, dto: T): Promise<AxiosResponse<Entity>> {
        return httpClient.patch<Entity>(`${this.endpoint}/${id}`, dto);
    }

    delete(id: number): Promise<AxiosResponse<Entity>> {
        return httpClient.delete(`${this.endpoint}/${id}`);
    }
}

export const createHttpService = <Entity>(endpoint: string): HttpService<Entity> => new HttpService<Entity>(endpoint);
