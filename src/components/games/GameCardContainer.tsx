import React from "react";
import { Box } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

export const GameCardContainer = ({ children }: Props): React.JSX.Element => {
    return (
        <Box borderRadius={10} overflow="hidden">
            {children}
        </Box>
    );
};
