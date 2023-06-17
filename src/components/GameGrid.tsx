// A Game grid component that renders games into a grid.

import {Alert, AlertIcon, SimpleGrid} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

const GameGrid = () =>
{
    // Custom hook to get the games and any error if applicable.
    const {games, error, isLoading} = useGames();

    return (
        <>
            {/* Return the error as an alert otherwise render the games.*/}
            {
                error &&
                <Alert marginTop="15" justifyContent="center" status='error'>
                    <AlertIcon />{error + "Please refresh the page."}
                </Alert>
            }
            <SimpleGrid columns={{sm: 1, md:2, lg: 3, xl: 4}} spacing={6}>
                {isLoading && games.map(game => <CardSkeleton key={game.id} />)}
                {games.map((game) => <GameCard key={game.id} game={game} />)}
            </SimpleGrid>
        </>
    )
}

export default GameGrid;