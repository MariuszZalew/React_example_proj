import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export const SkeletonPrev = () => {
  return (
    <Card>
      <Skeleton
        height={"240px"}
        width={"375px"}
        borderRadius={10}
        overflow="hidden"
      />
      <CardBody>
        <SkeletonText height={"60px"} />
      </CardBody>
    </Card>
  );
};
