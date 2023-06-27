import useData from "./UseData";
import {Genre} from "./UseGenres";

export interface Platform
{
    id: number,
    name: string,
    slug: string
}

// Interface to describe a game object.
export interface Game
{
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[]
    metacritic: number
}

const useGames = (selectedGenre: Genre | null) => useData<Game>("/games",
    {
        // Send the genre we are interested in to the useData hook so we can send an API request
        params: {genres: selectedGenre?.id}
    },
    [selectedGenre?.id] // the useEffect hook in the useData hook depends on the genre id to send requests
);

export default useGames;