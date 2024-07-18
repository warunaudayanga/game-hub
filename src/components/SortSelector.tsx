import { JSX } from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { SortOption } from "../interfaces";
import { useGameFiltersState } from "../store";

export const SortSelector = (): JSX.Element | null => {
    const sortOptions: SortOption[] = [
        { label: "Relevance" },
        { label: "Name", value: "name" },
        { label: "Release Date", value: "-released" },
        { label: "Date Added", value: "-added" },
        { label: "Average Rating", value: "-rating" },
        { label: "Popularity", value: "-metacritic" },
    ];

    const sortBy = useGameFiltersState(state => state.filters.sortBy);
    const setSortBy = useGameFiltersState(state => state.setSortBy);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: {sortOptions.find(o => o.value === sortBy)!.label}
            </MenuButton>
            <MenuList>
                {sortOptions.map((sortOption, index) => (
                    <MenuItem key={index} onClick={() => setSortBy(sortOption.value)}>
                        {sortOption.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};
