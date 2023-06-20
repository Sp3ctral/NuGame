// Component to wrap cards and loading skeletons with
// as children for styling them

import {Box} from "@chakra-ui/react";
import {ReactNode} from "react";

interface Props
{
    children: ReactNode
}

const GameCardContainer = ({children}: Props) =>
{
    // Wrap the children passed into this component with shared styles.
    return(
        <Box borderRadius={10} overflow="hidden">
            {children}
        </Box>
    )
}

export default GameCardContainer;