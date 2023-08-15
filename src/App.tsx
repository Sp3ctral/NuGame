// Main entrypoint for the NuGame webapp.
import {Box, Grid, GridItem, HStack, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import {useState} from "react";
import {Genre} from "./hooks/UseGenres";
import PlatformSelector from "./components/PlatformSelector";
import {Platform} from "./hooks/useGames";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery
{
    genre: Genre | null;
    platform: Platform | null;
    sortOption: string;
    searchText: string
}

function App()
{
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
      <>
          {/* Grid that contains the areas needed for the webapp. */}
          <Grid
              templateAreas={{base: `"nav" "main"`, lg: `"nav nav" " aside main"`}}
              templateColumns={{base: "1fr", lg: "200px 1fr"}}
          >
              <GridItem area="nav">
                  <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText})}/>
              </GridItem>
              {/* Show sidebar on devices that are large and above. */}
              <Show above="lg">
                  <GridItem area="aside" paddingX={3}>
                      <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) =>
                          setGameQuery({...gameQuery, genre})} />
                  </GridItem>
              </Show>
              <GridItem area="main">
                  <Box marginLeft={5}>
                      <GameHeading gameQuery={gameQuery} />
                      <HStack justify="center" spacing={5} marginBottom={10}>
                          <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) =>
                              setGameQuery({...gameQuery, platform})} />
                          <SortSelector sortOrder={gameQuery.sortOption} onSelectSortOption={(sortOption) =>
                              setGameQuery({...gameQuery, sortOption})} />
                      </HStack>
                  </Box>

                  {/* Game grid component to render the fetched games. */}
                  <GameGrid gameQuery={gameQuery} />
              </GridItem>
          </Grid>
      </>
  )
}

export default App