import { JSX } from "react";
import { NavBar } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = (): JSX.Element => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    );
};
