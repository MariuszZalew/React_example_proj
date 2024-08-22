import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import { PlatformList } from "./PlatformList";

export interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* {game.parent_platforms.map((platform) => (
          <Text>{platform.platform.name}</Text>
        ))} */}
        <PlatformList parent_platform_list={game.parent_platforms} />
      </CardBody>
    </Card>
  );
};
