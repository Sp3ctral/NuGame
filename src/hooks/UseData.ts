import {useEffect, useState} from "react";
import apiClient from "../services/apiClient";
import {CanceledError} from "axios";

interface fetchResponse<T>
{
    count: number,
    results: T[]
}

const UseData = <T>(endpoint: string) =>
{
    // Set the initial state to be an empty array of game objects.
    const [data, setData] = useState<T>(<T>[]);

    // Set the state of an error to be an empty string.
    const [error, setError] = useState("");

    // Track the loading state of the data
    const [isLoading, setLoading]= useState(false);

    // UseEffect hook to handle tasks after the request data fetch.
    useEffect(() =>
    {
        // Init an abort controller to check for cancelled errors.
        const controller = new AbortController();

        // Set loading to true upon entering data fetch zone.
        setLoading(true);

        // Fetch the data and if successful, set the game objects -> games.
        // If failed, set the error code --> error.
        apiClient
        .get<fetchResponse<T>>(endpoint, {signal: controller.signal})
        .then((res) =>
        {
            setData(res.data.results);
            setLoading(false);
        })
        .catch((err) =>
        {
            err instanceof CanceledError ? null : setError(err.message + ". ");
            setLoading(false);
        });

        return () => controller.abort();
    }, [])

    return {data, error, isLoading};
}

export default UseData;