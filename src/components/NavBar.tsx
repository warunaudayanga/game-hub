import { JSX } from "react";
import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/react.svg";
import { ColorModeSwitch } from "./ColorModeSwitch.tsx";
import { SearchInput } from "./SearchInput.tsx";
import { Link } from "react-router-dom";

export const NavBar = (): JSX.Element => {
    return (
        <HStack h="100%" px={3} py={2} spacing={5} alignItems="center">
            <Link to="/">
                <Image src={logo} boxSize="50px" objectFit="contain"></Image>
            </Link>
            <SearchInput />
            <ColorModeSwitch></ColorModeSwitch>
        </HStack>
    );
};
