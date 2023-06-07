import {HStack, Icon, IconButton, useColorMode} from "@chakra-ui/react";
import {BsFillMoonStarsFill, BsMoonStars} from "react-icons/bs";

const ColorModeSwitch = () =>
{
    const {colorMode, toggleColorMode} = useColorMode();

    return (
        <HStack>
            {/*Set the color mode to dark if dark, add the change color hook on change.*/}
            <IconButton marginRight="5" size="lg" aria-label="Dark mode" icon={<Icon as={colorMode === "dark" ?
                BsFillMoonStarsFill : BsMoonStars} />} onClick={toggleColorMode}/>
        </HStack>
    )
}

export default  ColorModeSwitch;