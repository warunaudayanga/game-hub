import React from "react";
import { Badge } from "@chakra-ui/react";

interface Props {
    score: number;
}

export const CriticScore = ({ score }: Props): React.JSX.Element => {
    const color = score >= 75 ? "green" : score >= 60 ? "yellow" : "";
    return (
        <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius={4}>
            {score}
        </Badge>
    );
};
