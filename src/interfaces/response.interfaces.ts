import { AxiosResponse } from "axios";

export interface GetAllResponse<T> {
    request: Promise<AxiosResponse<T>>;
    cancel: () => void;
}

export interface ListFetchResponse<T> {
    count: number;
    next: string | null;
    results: T[];
}
