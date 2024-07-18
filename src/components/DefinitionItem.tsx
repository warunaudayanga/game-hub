import { JSX, ReactNode } from "react";
import { Box, Heading } from "@chakra-ui/react";

interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

export const DefinitionItem = ({ term, children }: Props): JSX.Element => {
    return (
        <Box my={5}>
            <Heading as="dt" fontSize="md" size="md" color="gray.600">
                {term}
            </Heading>
            <dd>{children}</dd>
        </Box>
    );
};
