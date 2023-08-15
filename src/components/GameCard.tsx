// A fancy card component to house game details.

import {Game} from "../hooks/useGames";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";

interface Props
{
    game: Game
}

const GameCard = ({game}: Props) =>
{
    // Detect if each game's platforms are undefined and if they are, don't render the icons
    const platforms = game.parent_platforms === undefined ? [] :
        game.parent_platforms.map(parent => parent.platform)

    return(
        <Card>
            <Image draggable="false" src={getCroppedImageUrl(game.background_image)} />
            <CardBody>
                {/* HStack is needed here to align the scores on the right of the headers. */}
                <HStack marginBottom={2} justifyContent="space-between">
                    <PlatformIconList platforms={platforms} />
                    <HStack>
                        <CriticScore score={game.metacritic} />
                        <Emoji rating={game.metacritic ? game.rating_top : null} />
                    </HStack>
                </HStack>
                <Heading fontSize="2xl">{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard;