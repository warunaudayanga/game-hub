import { Genre } from "../interfaces";
import { genres } from "../data/genres.data.ts";
import { UseDataHookStates } from "../interfaces/hook.interfaces.ts";

export const useGenres = (): {
    genres: Genre[];
} & UseDataHookStates => {
    return { genres, isLoading: false, error: null };
};
