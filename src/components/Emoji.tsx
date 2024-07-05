import React from "react";

import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props extends ImageProps {
    rating: number;
}

export const Emoji = ({ rating, ...props }: Props): React.JSX.Element | null => {
    if (rating < 3) return null;

    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: "meh", boxSize: "25px" },
        4: { src: thumbsUp, alt: "recommended", boxSize: "25px" },
        5: { src: bullsEye, alt: "exceptional", boxSize: "35px" },
    };
    const imageProps = { ...props, ...emojiMap[rating] };
    return <Image {...imageProps} marginTop={1}></Image>;
};
