import genres from "../data/genres";

export interface Genre
{
    id: number,
    name: string,
    image_background: string
}

// Use static data instead of wasting API calls for the genres
const UseGenres = () => ({data: genres, isLoading: false});

export default UseGenres;