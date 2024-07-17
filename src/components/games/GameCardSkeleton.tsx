import { JSX } from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = (): JSX.Element => {
    return (
        <Card h="100%">
            <Skeleton height="150px"></Skeleton>
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
        </Card>
    );
};
