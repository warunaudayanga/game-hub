import React from "react";
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { SortOption } from "../interfaces";
import { SortBy } from "../types/sort-by.type.ts";

interface Props {
    selectedSortOption: SortBy | null;
    onSort: (sortBy: SortBy | null) => void;
}

export const SortSelector = ({ selectedSortOption, onSort }: Props): React.JSX.Element | null => {
    const sortOptions: SortOption[] = [
        { label: "Relevance", value: null },
        { label: "Name", value: "name" },
        { label: "Release Date", value: "-released" },
        { label: "Date Added", value: "-added" },
        { label: "Average Rating", value: "-rating" },
        { label: "Popularity", value: "-metacritic" },
    ];
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order By: {sortOptions.find(o => o.value === selectedSortOption)!.label}
            </MenuButton>
            <MenuList>
                {sortOptions.map(sortOption => (
                    <MenuItem key={sortOption.value} onClick={() => onSort(sortOption.value)}>
                        {sortOption.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};
