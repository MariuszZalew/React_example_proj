import {useEffect, useState} from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

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

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<fetchGamesRes>("/games")
      .then((res) => {
        setGames(res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false)
    });
    return () => controller.abort()
  },[]);

  return {games, error, isLoading}
}
export default useGames