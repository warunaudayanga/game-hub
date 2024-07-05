import axios, { AxiosResponse, CanceledError } from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "058dbeb8b8d7445f926c8d7f90fe42cc",
    },
});

export { CanceledError };
export type { AxiosResponse };
