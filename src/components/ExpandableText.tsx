import { JSX, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

interface Props {
    children: string;
    maxChars?: number;
}

export const ExpandableText = ({ children, maxChars = 300 }: Props): JSX.Element | null => {
    const [expanded, setExpanded] = useState(false);

    if (!children) return null;

    if (children.length <= maxChars) return <Text>{children}</Text>;

    const text: string = expanded ? children : children.substring(0, maxChars);

    return (
        <Text>
            {text} {!expanded && "..."}{" "}
            <Button colorScheme="yellow" size="xs" fontWeight="bold" ms={1} onClick={() => setExpanded(!expanded)}>
                {expanded ? "Show Less" : "Read More"}
            </Button>
        </Text>
    );
};
