import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
        .then(res => {
          if (!res.ok) {
            throw Error('Currently unavailable')
          }
          return res.json();
        })
        .then(data => {
          setData(data);
          setError(null);
          setIsLoading(false);
        })
        .catch(err => {
            if (err.name === 'AbortError' ) {
                console.log('aborted')
            } else {
            setIsLoading(false);
          setError(err.message);
            }

        })

        return() => abortCont.abort();

      }, [url]);

      return { data, isLoading, error }
}
export default useFetch;