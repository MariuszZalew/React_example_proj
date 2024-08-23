import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformList } from "./PlatformList";
import { Critic } from "./Critic";
import urlClip from "../services/url-clip";

export interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={urlClip(game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatformList parent_platform_list={game.parent_platforms} />
          <Critic score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
