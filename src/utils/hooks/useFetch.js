import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFetch(type , pageSize = 5 ) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [state, setState] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => { };
    }

    const controller = new AbortController();

    async function getState() {
      try {
        setState({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[at(document.type, "${type}" )]]`
          )}&lang=en-us&pageSize=${pageSize}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        setState({ data, isLoading: false });
      } catch (err) {
        setState({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getState();

    return () => {
      controller.abort();
    };
  }, [apiRef, isApiMetadataLoading, type , pageSize]);

  return state;
}
