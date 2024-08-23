import { CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";
import { ItemWrap } from "./ItemWrap";

export const SkeletonPrev = () => {
  return (
    <ItemWrap>
      <Skeleton height={"250px"} />
      <CardBody>
        <SkeletonText height={"60px"} />
      </CardBody>
    </ItemWrap>
  );
};
