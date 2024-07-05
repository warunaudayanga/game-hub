import React from "react";
import { HStack, Icon } from "@chakra-ui/react";
import { FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";
import { Platform } from "../interfaces";

interface Props {
    platforms?: Platform[];
}

export const PlatformIconList = ({ platforms }: Props): React.JSX.Element => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe,
    };

    return (
        <HStack marginY={2}>
            {platforms?.map(platform => <Icon key={platform.id} as={iconMap[platform.slug]} color={"gray.500"}></Icon>)}
        </HStack>
    );
};
