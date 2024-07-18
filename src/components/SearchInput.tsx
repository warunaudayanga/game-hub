import { ChangeEvent, JSX, useEffect, useState } from "react";
import { Button, Input, InputGroup, InputLeftElement, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { useGameFiltersState } from "../store";
import { useLocation, useNavigate } from "react-router-dom";

let timeout: ReturnType<typeof setTimeout>;

export const SearchInput = (): JSX.Element => {
    const [keyword, setKeyword] = useState<string>("");
    const setSearch = useGameFiltersState(state => state.setSearch);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        if (location.pathname !== "/") {
            setKeyword("");
            setSearch(undefined);
        }
    }, [location.pathname]);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
        setKeyword(event.target.value);
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setSearch(event.target.value);
            navigate("/");
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
