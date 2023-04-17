import {useState} from 'react';
import {Callback, ReturnUseFetching} from '@shared/hooks/types';

export function useFetching<T = void>(
  callback: Callback<T>,
): ReturnUseFetching<T> {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetching = async (args?: T) => {
    try {
      setIsLoading(true);
      await callback(args as T);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
}
