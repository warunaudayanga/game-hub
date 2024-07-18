import { JSX } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import { NavBar } from "../components";

export const ErrorPage = (): JSX.Element => {
    const error = useRouteError();
    return (
        <>
            <NavBar />
            <Box p={5}>
                <Heading>Oops...</Heading>
                <Text>
                    {isRouteErrorResponse(error) ? " This page does not exist!" : "Am unexpected error occurred!"}
                </Text>
            </Box>
        </>
    );
};
