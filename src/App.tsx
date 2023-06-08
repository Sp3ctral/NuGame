// Main entrypoint for the NuGame webapp.

import {Grid, GridItem, Show} from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App()
{
  return (
      <>
          {/* Grid that contains the areas needed for the webapp. */}
          <Grid templateAreas={{base: `"nav" "main"`, lg: `"nav nav" " aside main"`}}>
              <GridItem area="nav">
                  <NavBar />
              </GridItem>
              {/* Show only on devices that are large and above. */}
              <Show above="lg">
                  <GridItem area="aside">Aside</GridItem>
              </Show>
              <GridItem area="main">
                  {/* Game grid component to render the fetched games. */}
                  <GameGrid />
              </GridItem>
          </Grid>
      </>
  )
}

export default App