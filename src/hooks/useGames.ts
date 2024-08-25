import useData from './useData';

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: {platform: parentPlatform}[];
  metacritic: number;
}

export interface fetchGamesRes {
  count: number;
  results: Game[];
}
export interface parentPlatformList {
    parent_platform_list: {platform: parentPlatform}[]
}
interface parentPlatform {
    id: number;
    slug: string;
    name: string;
}

const useGames = () => useData<Game>('/games')
export default useGames