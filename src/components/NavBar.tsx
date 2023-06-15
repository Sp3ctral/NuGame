// NavBar component that contains the navbar and logo.

import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/Nu.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () =>
{
    return (
        <HStack marginBottom={8} justifyContent="space-between">
            <Image draggable="false" boxSize="80px" src={logo}/>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;