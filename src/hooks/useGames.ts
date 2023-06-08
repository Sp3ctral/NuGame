import {useEffect, useState} from "react";
import apiClient from "../services/apiClient";
import {CanceledError} from "axios";

// Interface to describe a game object.
interface Game
{
    id: number,
    name: string
}

// Interface to describe a GameResponse object which contains Game[].
interface GameResponse
{
    count: number,
    results: Game[]
}

const useGames = () =>
{
    // Set the initial state to be an empty array of game objects.
    const [games, setGames] = useState<Game[]>([]);

    // Set the state of an error to be an empty string.
    const [error, setError] = useState("");

    // UseEffect hook to handle tasks after the request data fetch.
    useEffect(() =>
    {
        // Init an abort controller to check for cancelled errors.
        const controller = new AbortController();

        // Fetch the data and if successful, set the game objects -> games.
        // If failed, set the error code --> error.
        apiClient
        .get<GameResponse>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) =>
        {
            err instanceof CanceledError ? null : setError(err.message + ". ");
        });

        return () => controller.abort();
    }, [])

    return {games, error};
}

export default useGames;