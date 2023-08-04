// Component to render the icons for each game platform.

import
{
    FaWindows,
    FaPlaystation,
    FaXbox,
    FaApple,
    FaLinux,
    FaAndroid
} from "react-icons/fa";
import {MdPhoneIphone} from "react-icons/md";
import {SiNintendo} from "react-icons/si";
import {BsGlobe} from "react-icons/bs";
import {Platform} from "../hooks/useGames";
import {HStack, Icon} from "@chakra-ui/react";
import {IconType} from "react-icons";

interface Props
{
    platforms: Platform[]
}

const PlatformIconList = ({platforms}: Props) =>
{
    // A map of platform slug to icon name for that platform.
    const iconMap: {[key: string]: IconType} =
        {
            pc: FaWindows,
            playstation: FaPlaystation,
            xbox: FaXbox,
            nintendo: SiNintendo,
            mac: FaApple,
            linux: FaLinux,
            ios: MdPhoneIphone,
            android: FaAndroid,
            web: BsGlobe
        }

    return(
        platforms.length > 0 &&
        <>
            {/* Return a stylized platform icon for each available platform. */}
            <HStack marginY={2}>
                {platforms.map((platform) => iconMap[platform.slug] !== undefined &&
                    <Icon key={platform.slug} color="red.400" as={iconMap[platform.slug]} />)}
            </HStack>
        </>
    )
}

export default PlatformIconList;