import React from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch.tsx";
import { SearchInput } from "./SearchInput.tsx";

interface Props {
    onSearch: (keyword?: string) => void;
}

export const NavBar = ({ onSearch }: Props): React.JSX.Element => {
    return (
        <HStack h="100%" px={3} py={2} spacing={5} alignItems="center">
            <Image src={logo} boxSize="50px"></Image>
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};
