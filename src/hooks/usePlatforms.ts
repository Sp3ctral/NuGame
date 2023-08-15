import platforms from "../data/platforms";

// Use static data for the platforms as they won't change often
const usePlatforms = () => ({data: platforms, error: null})

export default usePlatforms;