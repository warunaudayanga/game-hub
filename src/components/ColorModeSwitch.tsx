import React from "react";
import { Button, useColorMode } from "@chakra-ui/react";
import { TbMoonFilled, TbSun } from "react-icons/tb";

export const ColorModeSwitch = (): React.JSX.Element => {
    const { toggleColorMode, colorMode } = useColorMode();
    return (
        <Button onClick={toggleColorMode}>
            {colorMode === "dark" ? <TbSun size={30} /> : <TbMoonFilled size={30} />}
        </Button>
    );
};
