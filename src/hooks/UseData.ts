import {useEffect, useState} from "react";
import apiClient from "../services/apiClient";
import {AxiosRequestConfig, AxiosResponse, CanceledError} from "axios";

interface fetchResponse<T>
{
    count: number,
    results: T[]
}

const UseData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) =>
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
        // We also pass a request config to the api client to tell the API the request body . e.g: /games.genre
        apiClient
        .get<fetchResponse<T>>(endpoint, {signal: controller.signal, ...requestConfig})
        .then((res: AxiosResponse) =>
        {
            // @ts-ignore
            setData(res.data.results);
            setLoading(false);
        })
        .catch((err) =>
        {
            err instanceof CanceledError ? null : setError(err.message + ". ");
            setLoading(false);
        });

        return () => controller.abort();
    }, deps ? [...deps] : []) // If we have dependencies then we will resend a new request otherwise we chill

    return {data, error, isLoading};
}

export default UseData;