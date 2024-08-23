import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { GameCard } from "./GameCard";
import { SkeletonPrev } from "./SkeletonPrev";

export const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  const skelItems = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={8} spacing={8}>
        {isLoading && skelItems.map((elem) => <SkeletonPrev key={elem} />)}
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};
