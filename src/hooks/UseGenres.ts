import UseData from "./UseData";

export interface Genre
{
    id: number,
    name: string,
    image_background: string
}

const UseGenres = () => UseData<Genre>("/dgenres");

export default UseGenres;