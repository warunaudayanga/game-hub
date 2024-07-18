import { JSX, ReactNode } from "react";
import { Box } from "@chakra-ui/react";

interface Props {
    children: ReactNode;
}

export const GameCardContainer = ({ children }: Props): JSX.Element => {
    return (
        <Box
            borderRadius={10}
            overflow="hidden"
            _hover={{ transform: "scale(1.03)", transition: "transform .15s ease-in" }}
        >
            {children}
        </Box>
    );
};
