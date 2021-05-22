import { useState, useCallback, useEffect } from "react";

import { API_KEY, API_GAMES_URL, currentDate, nextDate } from "../util/constants";

export const useUrl = (page, fromDate, toDate) => {
  const [fetchUrl, setFetchUrl] = useState(`${API_GAMES_URL}?key=${API_KEY}&dates=${fromDate},${toDate}&page=${page}&page_size=10`)

  const fetchingUrl = useCallback(
    () => {
      if (!currentDate || !nextDate) setFetchUrl(`${API_GAMES_URL}?key=${API_KEY}`)
      return fetchUrl
    },
    [fetchUrl]
  )

  useEffect(() => {
    fetchingUrl()
  }, [fetchingUrl, page, fromDate, toDate]);

  return [fetchUrl, setFetchUrl];
};