// import React from "react";
// import { useData } from "./use-data.ts";
// import { Endpoint } from "../enums/endpoints.enum.ts";
// import { Game, GameFilters } from "../interfaces";
// import { UseDataHook } from "../interfaces/hook.interfaces.ts";
//
// export const useGames = (
//     filters: GameFilters,
// ): {
//     games: Game[];
//     setGames: React.Dispatch<React.SetStateAction<Game[]>>;
// } & UseDataHook => {
//     const {
//         data: games,
//         setData: setGames,
//         ...rest
//     } = useData<Game>(
//         Endpoint.GAMES,
//         {
//             params: {
//                 genres: filters.genre?.id,
//                 platforms: filters.platform?.id,
//                 ordering: filters.sort,
//                 search: filters.search,
//             },
//         },
//         [filters],
//     );
//     return { games, setGames, ...rest };
// };
