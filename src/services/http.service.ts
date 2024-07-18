// noinspection JSUnusedGlobalSymbols,Annotator

import httpClient from "./http-client";
import { ListFetchResponse, GetAllResponse, Pagination } from "../interfaces";
import { AxiosRequestConfig } from "axios";

export class HttpService<Entity> {
    constructor(protected endpoint: string) {}

    getAllWithCancel<T>(requestConfig?: AxiosRequestConfig): GetAllResponse<T> {
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

    async getAll<T extends Pagination>(filters?: T): Promise<ListFetchResponse<Entity>> {
        const { page, pageSize, ...rest } = filters || {};
        const params = {
            page: page && pageSize ? page : undefined,
            // eslint-disable-next-line camelcase
            page_size: page && pageSize ? pageSize : undefined,
            ...rest,
        };
        const res = await httpClient.get<ListFetchResponse<Entity>>(this.endpoint, { params });
        return res.data;
    }

    async get(id: number): Promise<Entity> {
        const res = await httpClient.get<Entity>(`${this.endpoint}/${id}`);
        return res.data;
    }

    async create<T>(dto: T): Promise<Entity> {
        const res = await httpClient.post<Entity>(this.endpoint, dto);
        return res.data;
    }

    async update<T>(id: number, dto: T): Promise<Entity> {
        const res = await httpClient.patch<Entity>(`${this.endpoint}/${id}`, dto);
        return res.data;
    }

    async delete(id: number): Promise<Entity> {
        const res = await httpClient.delete<Entity>(`${this.endpoint}/${id}`);
        return res.data;
    }
}

export const createHttpService = <Entity>(endpoint: string): HttpService<Entity> => new HttpService<Entity>(endpoint);
