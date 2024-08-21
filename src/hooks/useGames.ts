import {useEffect, useState} from 'react'
import apiClient from '../services/api-client';

interface Game {
  name: string;
  id: number;
}

interface fetchGamesRes {
  count: number;
  results: Game[];
}
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<fetchGamesRes>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return {games, error}
}
export default useGames