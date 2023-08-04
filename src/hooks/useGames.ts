import useData from "./UseData";
import {GameQuery} from "../App";

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

const useGames = (gameQuery: GameQuery) => useData<Game>("/games",
    {
        // Send the genre we are interested in to the useData hook so we can send an API request
        params:
            {
                genres: gameQuery.genre?.id,
                parent_platforms: gameQuery.platform?.id,
                ordering: gameQuery.sortOption,
                search: gameQuery.searchText
            }
    },
    [
        // Any time that this object changes, re-fetch the data.
        gameQuery
    ]
);

export default useGames;