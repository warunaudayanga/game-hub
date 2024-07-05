import { AxiosResponse } from "axios";

export interface GetAllResponse<T> {
    request: Promise<AxiosResponse<T>>;
    cancel: () => void;
}

export interface DataResponse<T> {
    count: number;
    results: T[];
}
