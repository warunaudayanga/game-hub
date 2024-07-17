import { ChangeEvent, JSX, useState } from "react";
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useGameFiltersState } from "../store/game-filter.state.ts";

let timeout: ReturnType<typeof setTimeout>;

export const SearchInput = (): JSX.Element => {
    const [keyword, setKeyword] = useState<string>("");
    const setSearch = useGameFiltersState(state => state.setSearch);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        setKeyword(event.target.value);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setSearch(keyword);
        }, 700);
    };

    return (
        <InputGroup>
            <InputLeftElement>
                <BsSearch />
            </InputLeftElement>
            <Input borderRadius={20} placeholder="Search games" value={keyword} onChange={handleSearch}></Input>;
            {keyword && (
                <InputRightElement>
                    <Button
                        variant="ghost"
                        _hover={{ bg: "transparent" }}
                        onClick={() => {
                            setKeyword("");
                            setSearch(undefined);
                        }}
                    >
                        <FaTimes />
                    </Button>
                </InputRightElement>
            )}
        </InputGroup>
    );
};
