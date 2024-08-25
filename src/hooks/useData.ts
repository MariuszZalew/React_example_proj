import {useEffect, useState} from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';


export interface fetchData<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint:string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true)
    apiClient
      .get<fetchData<T>>(endpoint)
      .then((res) => {
        setData(res.data.results)
        setIsLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setIsLoading(false)
    });
    return () => controller.abort()
  },[endpoint]);

  return {data, error, isLoading}
}
export default useData