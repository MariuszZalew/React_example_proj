import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const SkeletonPrev = () => {
  return (
    <Card borderRadius={10} overflow="hidden" width={"350px"}>
      <Skeleton height={"250px"} />
      <CardBody>
        <SkeletonText height={"60px"} />
      </CardBody>
    </Card>
  );
};
