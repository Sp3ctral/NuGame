// A Game grid component that renders games into a grid.

import {Alert, AlertIcon, SimpleGrid} from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () =>
{
    // Custom hook to get the games and any error if applicable.
    const {data, error, isLoading} = useGames();

    return (
        <>
            {/* Return the error as an alert otherwise render the games.*/}
            {
                error &&
                <Alert marginTop="15" justifyContent="center" status='error'>
                    <AlertIcon />{error + "Please refresh the page."}
                </Alert>
            }
            <SimpleGrid columns={{sm: 1, md:2, lg: 3, xl: 4}} paddingX={5} spacing={6}>
                {
                    isLoading && data.map(game =>
                    (
                        <GameCardContainer>
                            <CardSkeleton key={game.id} />
                        </GameCardContainer>
                    ))
                }
                {
                    data.map(game => (
                        <GameCardContainer>
                            <GameCard key={game.id} game={game} />
                        </GameCardContainer>
                    ))
                }
            </SimpleGrid>
        </>
    )
}

export default GameGrid;