import {Heading, HStack} from "@chakra-ui/react";
import {GameQuery} from "../App";

interface Props
{
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: Props) =>
{
    const heading = `${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games`;

    return(
        <HStack justify="center">
            <Heading color="red.400" fontWeight="400" fontSize="52px" marginBottom={5} as="h1">{heading}</Heading>
        </HStack>
    )
}

export default GameHeading;