import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatforms } from "../hooks/use-platforms.ts";
import { Platform } from "../interfaces";

interface Props {
    selectedPlatform: Platform | null;
    onSelectPlatform: (platform: Platform | null) => void;
}

export const PlatformSelector = ({ selectedPlatform, onSelectPlatform }: Props): React.JSX.Element | null => {
    const { platforms, error } = usePlatforms();
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatform?.name ?? "All Platform"}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectPlatform(null)}>All Platform</MenuItem>
                {platforms.map(platform => (
                    <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};
