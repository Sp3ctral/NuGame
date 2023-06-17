// A fancy card component to house game details.

import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";

interface Props
{
    game: Game
}

const GameCard = ({game}: Props) =>
{
    return(
        <Card marginX={{base: 4}} borderRadius={10} overflow="hidden">
            <Image draggable="false" src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                {/* HStack is needed here to align the scores on the right of the headers. */}
                <HStack justifyContent="space-between">
                    <Heading fontSize="2xl">{game.name}</Heading>
                    <CriticScore score={game.metacritic} />
                </HStack>
                <PlatformIconList platforms={game.parent_platforms.map(parent => parent.platform)} />
            </CardBody>
        </Card>
    )
}

export default GameCard;