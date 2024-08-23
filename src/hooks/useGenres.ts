import {useEffect, useState} from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Genre {
  name: string;
  id: number;
}

export interface fetchGenreRes {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genreList, setGenreList] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true)
    apiClient
      .get<fetchGenreRes>("/genres")
      .then((res) => {
        setGenreList(res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false)
    });
    return () => controller.abort()
  },[]);

  return {genreList, error, isLoading}
}
export default useGenres