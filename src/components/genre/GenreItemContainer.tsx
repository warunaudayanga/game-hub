import { JSX, ReactNode } from "react";
import { ListItem } from "@chakra-ui/react";

interface Props {
    children: ReactNode;
}

export const GenreItemContainer = ({ children }: Props): JSX.Element => {
    return <ListItem paddingY={1.5}>{children}</ListItem>;
};
