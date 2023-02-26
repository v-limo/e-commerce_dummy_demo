import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const abortCont = new AbortController()

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch the data for that resource')
        }
        return res.json()
      })
      .then((data) => {
        setData(data)
        setLoading(false)
        // error && setError(null);
      })
      .catch((err) => {
        if (err.name === 'AbortError') {
          console.log('fetch aborted')
        } else {
          // setError(err.message);
          setLoading(false)
        }
      })

    return () => abortCont.abort()
  }, [url])

  return { data, loading }
}

export default useFetch
