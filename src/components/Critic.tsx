import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
export const Critic = ({ score }: Props) => {
  const color = score > 90 ? "green" : score > 80 ? "yellow" : "orange";
  return (
    <Badge fontSize={"rem"} paddingX={2} colorScheme={color}>
      {score}
    </Badge>
  );
};
