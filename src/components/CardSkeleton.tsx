// Component to render skeleton while data is being fetched.

import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

const GameSkeleton = () =>
{
    // The skeleton card styles must match the Card element exactly.
    return(
    <Card>
        <Skeleton height="200px" />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card>
    )
}

export default GameSkeleton;