import { JSX } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { usePlatform, usePlatforms } from "../hooks";
import { useGameFiltersState } from "../store/game-filter.state.ts";

export const PlatformSelector = (): JSX.Element | null => {
    const platformId = useGameFiltersState(state => state.filters.platformId);
    const setPlatformId = useGameFiltersState(state => state.setPlatformId);

    const { platforms, error } = usePlatforms();
    const selectedPlatformName = usePlatform(platformId)?.name;

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {selectedPlatformName || "All Platforms"}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => setPlatformId()}>All Platform</MenuItem>
                {platforms?.results.length &&
                    platforms.results.map(platform => (
                        <MenuItem key={platform.id} onClick={() => setPlatformId(platform.id)}>
                            {platform.name}
                        </MenuItem>
                    ))}
            </MenuList>
        </Menu>
    );
};
