import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform, usePlatforms } from "../hooks";
import { Platform } from "../interfaces";

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platform: Platform | null) => void;
}

export const PlatformSelector = ({ selectedPlatformId, onSelectPlatform }: Props): React.JSX.Element | null => {
    const { platforms, error } = usePlatforms();
    const selectedPlatformName = usePlatform(selectedPlatformId)?.name;
    if (error) return null;
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatformName || "All Platforms"}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectPlatform(null)}>All Platform</MenuItem>
                {platforms?.results.length &&
                    platforms.results.map(platform => (
                        <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>
                            {platform.name}
                        </MenuItem>
                    ))}
            </MenuList>
        </Menu>
    );
};
