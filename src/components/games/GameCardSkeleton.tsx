import React from "react";
import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const GameCardSkeleton = (): React.JSX.Element => {
    return (
        <Card>
            <Skeleton height="150px"></Skeleton>
            <CardBody>
                <SkeletonText></SkeletonText>
            </CardBody>
        </Card>
    );
};
