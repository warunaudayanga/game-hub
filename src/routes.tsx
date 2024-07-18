import type { Router } from "@remix-run/router";
import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, GameDetailsPage, HomePage, Layout } from "./pages";

export const router: Router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage></HomePage> },
            { path: "games/:slug", element: <GameDetailsPage></GameDetailsPage> },
            // { path: "login", element: <LoginPage /> },
            // { path: "contact", element: <Contact></Contact> },
        ],
    },
]);
