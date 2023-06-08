// A Game grid component that renders games into a grid.

import {Alert, AlertIcon} from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () =>
{
    // Custom hook to get the games and any error if applicable.
    const {games, error} = useGames();

    return (
        <>
            {/* Return the error as an alert otherwise render the games.*/}
            {
                error &&
                <Alert marginTop="15" justifyContent="center" status='error'>
                    <AlertIcon />{error + "Please refresh the page."}
                </Alert>
            }
            <ul>
                {games.map((game) => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
}

export default GameGrid;