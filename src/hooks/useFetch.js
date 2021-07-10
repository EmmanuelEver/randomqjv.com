import { useEffect, useState } from "react"

const useFetch = (url, options = {}) => {
    const [data, setData] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState({});

    useEffect(() => {
        setIsLoading(true)
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setIsLoading(false);
        })
        .catch((err) => {
            setError(err);
            setIsLoading(false);
            setIsLoading(state => !state);
        })
    }, [url])

    const doFetch = () => {
        setIsLoading(true)
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => {
            setData(data);
            setIsLoading(false);
        })
        .catch((err) => {
            setError(err);
            setIsLoading(false);
        })
    }

    return {data, isLoading, error, doFetch}
}

export default useFetch;