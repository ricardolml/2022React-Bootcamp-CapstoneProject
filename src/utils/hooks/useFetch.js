import { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

export function useFetch(type, tags, id, pageSize = 16, fulltext) {
  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [state, setState] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }
    if (type === null) {
      setState({
        data: {},
        isLoading: false,
      });
      return () => {};
    }
    const controller = new AbortController();

    async function getState() {
      const params = `
        ${id ? `[at(document.id, "${id}" )]` : ''}
        ${type ? `[at(document.type, "${type}" )]` : ''}
        ${tags ? `[at(document.tags, ["${tags}"] )]` : ''}
        ${fulltext ? `[fulltext(document, "${fulltext}" )]` : ''}
      `;
      try {
        setState({ data: {}, isLoading: true });

        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[${params}]`
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
  }, [apiRef, isApiMetadataLoading, type, pageSize, tags, id, fulltext]);

  return state;
}
