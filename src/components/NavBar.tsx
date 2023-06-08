// NavBar component that contains the navbar and logo.

import {HStack, Image} from "@chakra-ui/react";
import logo from "../assets/Nu.png";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () =>
{
    return (
        <HStack justifyContent="space-between">
            <Image boxSize="80px" src={logo}/>
            <ColorModeSwitch />
        </HStack>
    )
}

export default NavBar;