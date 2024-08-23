import { Card } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export const ItemWrap = ({ children }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden" width={"350px"}>
      {children}
    </Card>
  );
};
