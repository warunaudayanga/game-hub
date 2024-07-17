import { JSX } from "react";
import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GenreItemSkeleton = (): JSX.Element => {
    return (
        <HStack>
            <Skeleton h="32px" w="32px" borderRadius={8}></Skeleton>
            <SkeletonText noOfLines={1} flexGrow={1} skeletonHeight={4}></SkeletonText>
        </HStack>
    );
};
