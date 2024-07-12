import React, { useState } from "react";
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";

interface Props {
    onSearch: (keyword?: string) => void;
}

let timeout: number;

export const SearchInput = ({ onSearch }: Props): React.JSX.Element => {
    const [keyword, setKeyword] = useState<string>("");
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setKeyword(event.target.value);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            onSearch(event.target.value);
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
                            onSearch(undefined);
                        }}
                    >
                        <FaTimes />
                    </Button>
                </InputRightElement>
            )}
        </InputGroup>
    );
};
