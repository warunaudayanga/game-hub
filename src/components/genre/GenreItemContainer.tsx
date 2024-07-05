import React from "react";
import { ListItem } from "@chakra-ui/react";

interface Props {
    children: React.ReactNode;
}

export const GenreItemContainer = ({ children }: Props): React.JSX.Element => {
    return <ListItem paddingY={1.5}>{children}</ListItem>;
};
