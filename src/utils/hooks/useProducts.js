import { useEffect, useRef, useState } from 'react';
import { API_BASE_URL } from '../constants';
import { useLatestAPI } from './useLatestAPI';

const useProducts = (categories, page = 1, pageSize = 12) => {
  const isMounted = useRef(true);

  const { ref: apiRef, isLoading: isApiMetadataLoading } = useLatestAPI();
  const [state, setState] = useState(() => ({
    data: {},
    isLoading: true,
  }));

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    if (!apiRef || isApiMetadataLoading) {
      return () => {};
    }

    const controller = new AbortController();

    async function getState() {
      try {
        setState({ data: {}, isLoading: true });
        const anyCategories = `"${categories.join('","')}"`;
        const response = await fetch(
          `${API_BASE_URL}/documents/search?ref=${apiRef}&q=${encodeURIComponent(
            `[[${
              categories.length > 0
                ? `any(my.product.category, [${anyCategories}] )`
                : `at(document.type, "product" )`
            }]]`
          )}&page=${page}&lang=en-us&pageSize=${pageSize}`,
          {
            signal: controller.signal,
          }
        );
        const data = await response.json();

        isMounted.current && setState({ data, isLoading: false });
      } catch (err) {
        isMounted.current && setState({ data: {}, isLoading: false });
        console.error(err);
      }
    }

    getState();
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [apiRef, isApiMetadataLoading, page, categories]);

  return state;
};

export default useProducts;
