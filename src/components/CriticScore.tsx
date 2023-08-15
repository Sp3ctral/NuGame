// Component to render the critic scores of each game and their colors based on score.

import {Badge} from "@chakra-ui/react";

interface Props
{
    score: number | null
}

const CriticScore = ({score}: Props) =>
{
    // Dynamically determine the color of each score badge based on the condition.
    let color = !score ? "orange" : score <= 50 ? "red" : score <= 70 ? "yellow"
        : score >= 70 ? "green" : "";

    // Return a stylized badge with the score.
    return <Badge colorScheme={color} fontSize={"18px"} paddingX={2}
                  borderRadius={6}>{score || "—"}</Badge>
}

export default CriticScore;